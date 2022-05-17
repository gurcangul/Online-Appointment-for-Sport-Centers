import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css'; 
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';

const Intro = () => {
 
  return (
    <div>
      <div className='landing_top_v1'> 
          <div className='landing_top_v2'>
              <h1>IZTECHFit</h1>   
              <p>95% of our members use the online reservation system!</p>
              <Link className='login-button' to='/register' variant="contained">TRY NOW</Link>        
              <br></br>            <br></br>
              <br></br>
          </div>
      </div>      
      </div> 
  )
}
export default Intro