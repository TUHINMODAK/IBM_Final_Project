import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import LoginPage from './Components/AdminLoginPage/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin-login' element={<LoginPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
