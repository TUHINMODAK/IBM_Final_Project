import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import LoginPage from './Components/AdminLoginPage/LoginPage'
import AdminDashboard from './Components/Admin_Dashboard/AdminDashboard'
import Add from './Components/Admin_Dashboard/AddMovie/Add'
import Edit from './Components/Admin_Dashboard/EditMovie/Edit'
import EditMovieWrapper from './Components/Wrapper/EditMovieWrapper'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin-login' element={<LoginPage/>}></Route>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard/add" element={<Add />} />
          <Route path="/dashboard/edit/:id" element={<EditMovieWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
