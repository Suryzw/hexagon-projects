import React from 'react';
import Home from './components/landingPage/Home'
import AboutUs from './components/landingPage/AboutUs'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/homePage/HomePage';
import Dashboard from './components/homePage/Dashboard';
import About from './components/homePage/About';
import { HashRouter, Routes, Route,} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </HashRouter>
    </>
    
  );
}

export default App;
