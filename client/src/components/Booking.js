import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Booking'
import BookingInfo from './BookingInfo'

const Booking = ({
  _id,
  position,
  planningDate,
  bookingLocation,
  bookingType,
  createdAt,
  status,
}) => {
  const { setEditBooking, deleteBooking } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{planningDate.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{planningDate}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <BookingInfo icon={<FaLocationArrow />} text={bookingLocation} />
          <BookingInfo icon={<FaCalendarAlt />} text={date} />
          <BookingInfo icon={<FaBriefcase />} text={bookingType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-booking'
              className='btn edit-btn'
              onClick={() => setEditBooking(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteBooking(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Booking
