import React from 'react';
import Navbar from './components/landingPage/Header'
import Home from './components/landingPage/Home'
import AboutUs from './components/landingPage/AboutUs'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { HashRouter, Routes, Route,} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
        </Routes>
      </HashRouter>
    </>
    
  );
}

export default App;
