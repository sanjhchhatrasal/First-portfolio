import React from 'react'
import ochi from './ochi4.mp4'
import keep from './Keep-app2.mp4'
import todolist from './Todo-react1.mp4'
import color from './color-combi7.mp4'
import beer from './beer2.mp4'
import egg from './egg5.mp4'
import { NavLink } from 'react-router-dom'

function Project() {
  return (
    <div className='h-[110vh] w-full bg-slate-100 dark:bg-slate-900 dark:text-white  px-[5vw] text-center'>
      <h1 className='lg:text-[3vw] sm:text-[3.5vw] text-[4.2vw] font-semibold w-[60vw] py-[1vw] lg:pl-[25vw] pl-[20vw]'>Here are my<span className='text-orange-700'> Projects </span> </h1>
      <div className='w-full h-[100vh] flex-wrap grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3'>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw]">
          <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7165971660095930368/"><video className='lg:h-[70%] lg:w-[100%]' muted loop autoPlay src={ochi}></video></NavLink>
          <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>Ochi Website</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>React </h2>
        </div>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw] ">
        <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7159902368141066240/"><video muted loop autoPlay src={keep}></video></NavLink>
        <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>Keep App</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>React </h2>
        </div>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw] ">
        <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7158826827250049025/"><video muted loop autoPlay src={todolist}></video></NavLink>
        <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>ToDo List</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>React </h2>
        </div>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw] ">
       <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7153008569200607232/?originTrackingId=MsNvPNrUQdOBmDrN2wDNmA%3D%3D"> <video muted loop autoPlay src={color}></video></NavLink>
        <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>Color-Combination</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>JavaScript</h2>
        </div>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw] ">
        <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7145664205759713280/?originTrackingId=1TsHPiXLQcqPGVsLZfA1WA%3D%3D"><video muted loop autoPlay src={beer}></video></NavLink>
        <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>Lagunitas</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>JavaScript</h2>
        </div>
        <div className="lg:h-[19vw] lg:w-[25vw] sm:h-[23vw] sm:w-[28vw] ">
        <NavLink to="https://www.linkedin.com/feed/update/urn:li:activity:7137861882719182848/?originTrackingId=PZpPUGjkQpGM%2BF1kGVPO%2FQ%3D%3D"><video muted loop autoPlay src={egg}></video></NavLink>
        <h1 className='lg:text-[2vw] text-[4vw] font-semibold'>Begg-Egg</h1>
          <h2 className='lg:text-[1.3vw] text-[3.5vw]'>JavaScript</h2>
        </div>
      </div>
    </div>
  )
}

export default Project
