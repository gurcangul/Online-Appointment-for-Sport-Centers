import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/HomePage.js";
import Register from "./pages/RegisterPage.js";
import Reservation from "./pages/ReservationPage.js";
import Home from "./pages/Home.js";
import LandingPage  from './pages/LandingPage.js';

import ButtonAppBar from './components/Navbar/ButtonAppBar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.js'

function App() {
  return ( 
  <div className="App background">
    <BrowserRouter>
        <Container className='container' maxWidth="lg"> 
    <br></br>
    <ButtonAppBar/> <br></br>
        <Routes>
          <Route path="/" element={
          <ProtectedRoute> 
            <Homepage /> 
          </ProtectedRoute>
          }>
          <Route path="/homepage" element={<Homepage /> } />
          <Route index element={<Home /> } />
          <Route path="/reservation" element={<Reservation/>} />
          </Route>          

          <Route path="/register" element={<Register/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="*" element={<div>Error Page</div>}/>
        </Routes> </Container>
    </BrowserRouter>
    </div>
  );
}


export default App