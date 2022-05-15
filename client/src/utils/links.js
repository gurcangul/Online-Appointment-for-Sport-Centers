import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'

const links = [
  { id: 1, text: 'All stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 1, text: 'My Program', path: '/my-program', icon: <GiProgression /> },
  { id: 2, text: 'all bookings', path: 'all-bookings', icon: <MdQueryStats /> },
  { id: 3, text: 'add booking', path: 'add-booking', icon: <FaWpforms /> },
  { id: 4, text: 'Calendar', path: 'calendar', icon: <BsFillCalendarDateFill /> },
  { id: 4, text: 'My Profile', path: 'myProfile', icon: <ImProfile /> },


]

export default links
