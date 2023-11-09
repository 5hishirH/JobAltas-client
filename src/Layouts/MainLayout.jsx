import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen relative'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div className='h-64'></div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout