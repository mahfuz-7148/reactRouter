import React from 'react'
import Contact from '../components/Contact/Contact'
import { Outlet } from 'react-router-dom'

const Contactlayput = () => {
  return (
    <div>
        <Contact />
        <div className='text-4xl bg-green-400 p-5 justify-center flex mt-10'>
        <Outlet />
        </div>
    </div>
  )
}

export default Contactlayput