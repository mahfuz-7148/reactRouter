import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData()
    
  return (
    <div className='grid grid-cols-3'>
        {jobsData.map(job => {
            return <Link to={job.id.toString()} key={job.id}>
               <div className='border-2 border-gray-950 text-3xl p-3 m-4'>
               <h4>{job.title} </h4>
               <p>{job.price} </p>
               </div>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobsLoader = async ()=> {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}