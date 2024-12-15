import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorRouter = () => {

    const error = useRouteError()
    const navigate = useNavigate()
  return (
    <div>
        <h2>Its an error</h2>
        <p>{error.message} </p>
        <button className='border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full text-3xl' type="submit" onClick={() => navigate('/')}>Go to Home page</button>
    </div>

  )
}

export default ErrorRouter