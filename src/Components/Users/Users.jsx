import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid } = useParams()
  return (
    <div className='h-[70vh] w-full bg-slate-100 relative'>
      <h1 className='lg:text-[4vw] text-[5.5vw] text-white lg:pl-[45vw] pl-[30vw] pt-[5vw] absolute font-semibold'>User : <span className='text-orange-700'>{userid}</span></h1>
      <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/5102907/pexels-photo-5102907.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  )
}

export default Users
