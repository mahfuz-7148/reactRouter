import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='text-7xl bg-green-400 p-5 justify-center flex mt-52'>
        <Outlet />
        </div>
    </div>
  )
}

export default RootLayout