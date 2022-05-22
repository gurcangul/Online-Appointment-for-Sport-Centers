import Booking from '../models/Booking.js'
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'
const createBooking = async (req, res) => {
  const { position, planningDate } = req.body

  if (!position || !planningDate) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId
  const booking = await Booking.create(req.body)
  res.status(StatusCodes.CREATED).json({ booking })
}
const getAllBookings = async (req, res) => {
  const { status, bookingType, sort, search } = req.query

  const queryObject = {
    createdBy: req.user.userId,
  }
  // add stuff based on condition

  if (status && status !== 'all') {
    queryObject.status = status
  }
  if (bookingType && bookingType !== 'all') {
    queryObject.bookingType = bookingType
  }
  if (search) {
    queryObject.position = { $regex: search, $options: 'i' }
  }
  // NO AWAIT

  let result = Booking.find(queryObject)

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const bookings = await result

  const totalBookings = await Booking.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalBookings / limit)

  res.status(StatusCodes.OK).json({ bookings, totalBookings, numOfPages })
}
const updateBooking = async (req, res) => {
  const { id: bookingId } = req.params
  const { planningDate, position } = req.body

  if (!position || !planningDate) {
    throw new BadRequestError('Please provide all values')
  }
  const booking = await Booking.findOne({ _id: bookingId })

  if (!booking) {
    throw new NotFoundError(`No booking with id :${bookingId}`)
  }
  // check permissions

  checkPermissions(req.user, booking.createdBy)

  const updatedBooking = await Booking.findOneAndUpdate({ _id: bookingId }, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(StatusCodes.OK).json({ updatedBooking })
}
const deleteBooking = async (req, res) => {
  const { id: bookingId } = req.params

  const booking = await Booking.findOne({ _id: bookingId })

  if (!booking) {
    throw new NotFoundError(`No booking with id :${bookingId}`)
  }

  checkPermissions(req.user, booking.createdBy)

  await booking.remove()

  res.status(StatusCodes.OK).json({ msg: 'Success! Booking removed' })
}
const showStats = async (req, res) => {
  let stats = await Booking.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
    return acc
  }, {})

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    canceled: stats.canceled || 0,
  }

  let monthlyApplications = await Booking.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ])
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y')
      return { date, count }
    })
    .reverse()

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}

export { createBooking, deleteBooking, getAllBookings, updateBooking, showStats }
