import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact  = () => {
  const navigate = useNavigate()
  return (
    <div><h1>Welcome to the Contact</h1>
    <div className='flex justify-center m-5 p-2'>
      <button onClick={()=> navigate('info')} className='text-2xl border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full'>ContactInfo</button>
      <button onClick={()=> navigate('form')} className='text-2xl border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full'>ContactForm</button>
    </div>
    
    </div>

  )
}

export default Contact 