import React from 'react'

const ContactForm = () => {
  return (
    <div>
       <form>
         <input type="text" placeholder='Name' className='m-2 p-2 rounded-2xl outline-none'/>
         <br />
         <input type="email" placeholder='Email' className='m-2 p-2 rounded-2xl outline-none'/>
         <br />
         <textarea placeholder="write yourself" className='m-2 p-2 rounded-2xl outline-none'></textarea>
         <div className='flex justify-center'>
         <button className='border border-blue-800 bg-black text-yellow-100 p-4 m-3 rounded-full' type="submit">Submit</button>
         </div>
       </form>
    </div>
  )
}

export default ContactForm