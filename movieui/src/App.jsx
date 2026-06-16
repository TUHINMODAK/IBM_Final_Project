import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import LoginPage from './Components/AdminLoginPage/LoginPage'
import AdminDashboard from './Components/Admin_Dashboard/AdminDashboard'

import EditMovieWrapper from './Components/Admin_Dashboard/EditMovie/Wrapper/EditMovieWrapper'
import AddMovieWrapper from './Components/Admin_Dashboard/EditMovie/Wrapper/AddMovieWrapper'
import DashboardWrapper from './Components/Admin_Dashboard/EditMovie/Wrapper/DashboardWrapper'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin-login' element={<LoginPage/>}></Route>
          <Route path="/dashboard" element={<DashboardWrapper />} />
          <Route path="/dashboard/add" element={<AddMovieWrapper />} />
          <Route path="/dashboard/edit/:id" element={<EditMovieWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
