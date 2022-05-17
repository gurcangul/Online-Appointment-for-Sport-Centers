import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import './style.css'; 
import ButtonAppBar from '../components/components/Navbar/ButtonAppBar.js';

const Landing = () => {
  return (
    <div>
    <div>      
      <ButtonAppBar/> <br></br>
      <div className='landing_top_v1'> 
          <div className='landing_top_v2'>
              <h1>IZTECHFit</h1>   
              <p>95% of our members use the online reservation system!</p>
              <Link className='login-button' to='/register' variant="contained">TRY NOW</Link>        
              <br></br>            <br></br>
              <br></br>
          </div>
      </div>      
      </div></div>
  )
}

export default Landing
