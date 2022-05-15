import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import { MdOutlinePendingActions } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'Pending Reservations',
      count: stats.pending || 0,
      icon: <MdOutlinePendingActions />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Complated Reservations',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Canceled Reservations',
      count: stats.canceled || 0,
      icon: <AiOutlineClose />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
