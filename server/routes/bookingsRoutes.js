import express from 'express'
const router = express.Router()

import {
  createBooking,
  deleteBooking,
  getAllBookings,
  updateBooking,
  showStats,
} from '../controllers/bookingsController.js'

router.route('/').post(createBooking).get(getAllBookings)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteBooking).patch(updateBooking)

export default router
