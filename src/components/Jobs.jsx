import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData()
    
  return (
    <div>
        {jobsData.map(job => {
            return <Link>
               <div className='border-2 border-gray-950 text-3xl p-3 m-4'>
               <h4>{job.title} </h4>
               <p>{job.salary} </p>
               <p>{job.location}</p>
               </div>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobsLoader = async ()=> {
    const res = await fetch('http://localhost:5000/jobs');
    return res.json();
}