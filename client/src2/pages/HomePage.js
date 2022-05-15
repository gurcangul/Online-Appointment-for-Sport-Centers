import React, { useEffect } from 'react'
import Home from '../components/Home/Home';

const HomePage = () => {
  const fetchData = async ()=>{
    try{
      const response = await fetch('api/v1')
      const data = await response.json()
      console.log(data);
    } catch(error){
      console.log(error);

    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
        <Home/>
    </div>
  )
}

export default HomePage