import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'

export const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
