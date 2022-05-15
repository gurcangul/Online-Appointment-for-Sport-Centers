import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Booking from './Booking'
import Wrapper from '../assets/wrappers/BookingsContainer'
import PageBtnContainer from './PageBtnContainer'

const BookingsContainer = () => {
  const {
    getBookings,
    bookings,
    isLoading,
    page,
    totalBookings,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext()
  useEffect(() => {
    getBookings()
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return <Loading center />
  }

  if (bookings.length === 0) {
    return (
      <Wrapper>
        <h2>No bookings to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5 className='booking-h5'>
        {totalBookings} booking{bookings.length > 1 && 's'} found
      </h5>
      <div className='bookings'>
        {bookings.map((booking) => {
          return <Booking key={booking._id} {...booking} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default BookingsContainer
