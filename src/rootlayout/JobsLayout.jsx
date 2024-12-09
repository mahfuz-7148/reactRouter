import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
       <h2 className='text-6xl m-1 p-1 flex justify-center'>Jobs Ekhanei</h2>
       <p className='text-3xl m-1 p-1 flex justify-center'>List of current Jobs</p>
       
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default JobsLayout