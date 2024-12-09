import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Opsss !! Page not found</h1>

        <div className='flex justify-center mt-5'>
            <button onClick={()=> navigate('/')} className='border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full text-2xl' type="submit">Go to Home page</button>
        </div>
    </div>
  )
}

export default Errorpage