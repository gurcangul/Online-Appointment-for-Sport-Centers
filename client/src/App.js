import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import ButtonAppBar from './components/Navbar/ButtonAppBar';
import Intro from './components/Intro/Intro';

const App = () => {

  return (
    <div className="App background">
    <BrowserRouter> 
    <Container className='container' maxWidth="lg"> 
    <br></br>
    <ButtonAppBar className="button-app-bar"/> <br></br>
        <Routes>     
          <Route path='/' element={<Intro />}/>
          <Route path='/home' element={<Home /> 
}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes><br></br>
      </Container>
    </BrowserRouter>
    </div>
  );
};


export default App