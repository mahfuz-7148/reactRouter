import React from 'react'
import { useLoaderData} from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData()
 
  return (
    <div className='grid grid-cols-3'>
       <p className='text-4xl font-bold flex justify-center p-3'>Title: {jobDetails.title} </p>
       <p className='text-3xl flex justify-center p-3'>Price: {jobDetails.price} </p>
       <p className='text-3xl flex justify-center p-3'>Description: {jobDetails.description} </p>

       <div className='flex justify-end -mr-96 ml-96 '>
        <button className='border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full text-3xl' type="submit">Apply Job</button>
       </div>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async({params}) => {
    const {id} = params
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    if(!res.ok) {
      throw Error('Opss!! not found')
    }
    return res.json();
}