import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const MyProgram = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
    <h1>My Program</h1>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default MyProgram
