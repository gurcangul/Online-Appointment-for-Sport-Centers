import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css'; 
import Auth from '../Auth/Auth';

const Intro = () => {
    const[show, setShow]=useState(false);

  return (
      <div>
    <div className='landing_top_v1'> 
        <div className='landing_top_v2'>
            <h1> MACfit</h1>   
            <p>Üyelerimizin %95'i online rezervasyon sistemimizi kullanıyor!</p>
            
            <Button onClick={()=>setShow(true)} variant="contained">Hemen Dene!</Button>
            
            <br></br>            <br></br>
            <br></br>

        </div>
    </div>  {
                show?<div className='landing_top_v0'><Auth/></div>:null
            }
    
    
    </div> 
  )

  }
export default Intro