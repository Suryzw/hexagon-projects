import React from 'react';
import {Routes, Route, BrowserRouter,} from "react-router-dom"
import { UserInputProvider } from './UserInputContext';
import Home from './pages/landingPages/Home'
import AboutUs from './pages/landingPages/AboutUs'
import Login from './pages/landingPages/Login'
import SignUp from './pages/landingPages/SignUp'
import HomePage from './pages/HomePages/HomePage';
import Dashboard from './pages/HomePages/Dashboard';
import About from './pages/HomePages/About';
import QuizPage from './pages/HomePages/Ujian';
import RecruitmentForm from './components/homePage/RecruitmentForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AdminUserData from './pages/adminPage/UserData';
import AdminCompanyData from './pages/adminPage/CompanyData';
import AdminRecruitmentData from './pages/adminPage/RecruitmentData';


function App() {
  
  return (
    <>
      <BrowserRouter>
      <UserInputProvider>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/aboutUs' element={<AboutUs />} />
              <Route path='/auth/login' element={<Login/>}/>
              <Route path='/auth/signup' element={<SignUp/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/recruitment-form/:name/:tgl/:id' element={<RecruitmentForm/>}/>
              <Route path='/test' element={<QuizPage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/admindatauser' element={<AdminUserData/>}/>
              <Route path='/admindatacompany' element={<AdminCompanyData/>}/>
              <Route path='/adminrecruitmentdata' element={<AdminRecruitmentData/>}/>

          </Routes>
          </UserInputProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
