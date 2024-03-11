import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

function Github() {
   const data = useLoaderData()
    
  return (
    <div className='h-[80vh] w-full bg-slate-100 dark:bg-slate-900 dark:text-white lg:py-[3vw] sm:py-[5vw] py-[5vw]'>
            <h1 className='lg:text-[2.5vw] sm:text-[3vw] text-[4vw] text-center pt-10 font-semibold text-orange-700 flex items-center justify-center'><FaGithub className='text-black dark:text-white mr-[1vw]'/> GitHub <span className='text-black dark:text-white'>Account</span></h1>
      <div className='flex items-center justify-between sm:px-[24vw] px-[18vw] lg:py-[5vw] sm:py-[6vw] py-[7vw]'>
        <img className='lg:h-[10vw] lg:w-[10vw] sm:h-[15vw] sm:w-[15vw] h-[18vw] w-[18vw] rounded-full' src={data.avatar_url} alt="git-avater" />
        <h1 className='lg:text-[2vw] sm:text-[2.5vw] text-[3vw]'>Followers : {data.followers}</h1>
        <h1 className='lg:text-[2vw] sm:text-[2.5vw] text-[3vw]'>Followings : {data.followers}</h1>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
  const response = await fetch("https://api.github.com/users/sanjhchhatrasal")
  return response.json()
}
