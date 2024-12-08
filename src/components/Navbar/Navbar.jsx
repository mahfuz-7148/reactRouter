import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div className='bg-blue-700 text-white justify-around flex p-5'>
        <ul>
          <NavLink to='/'><a className='p-5'>Home</a></NavLink>
          <NavLink to='blogs'><a className='p-5'>Blogs</a></NavLink>
          <NavLink to='about'><a className='p-5'>About</a></NavLink>
          <NavLink to='contact'><a className='p-5'>Contact</a></NavLink>
        </ul>

        <div>
          <button onClick={()=> navigate('/contact', {replace:true})}>Go to Contact</button>
        </div>
    </div>

  )
}

export default Navbar