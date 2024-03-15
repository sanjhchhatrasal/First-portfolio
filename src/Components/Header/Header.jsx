import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Theme from '../Theme/Theme'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
<>
<div className=' h-fit w-full bg-slate-100 dark:bg-slate-900 dark:text-white px-[5vw] sm:py-[2vw] flex items-center justify-between sticky top-0'>
      <h1 className={`${menuOpen ? "mt-[-30vw]" : "mt-0"} sm:text-[2vw] text-[3.5vw] font-semibold sm:mt-0`}>Sanjh <span className='text-orange-700'>Chhatrasal</span></h1>
      <div className={`${menuOpen ? "mt-[-30vw]" : "mt-0"} menu flex flex-col justify-between w-[2.25rem] h-2rem sm:hidden ml-[75vw] absolute sm:mt-0 mt-[0vw]`} onClick={() => {setMenuOpen(!menuOpen)}}>
        <span className='h-[0.3rem] w-[100%] bg-zinc-800 dark:bg-zinc-100 rounded-xl my-[0.15vw]'></span>
        <span className='h-[0.3rem] w-[100%] bg-zinc-800 dark:bg-zinc-100 rounded-xl my-[0.15vw]'></span>
        <span className='h-[0.3rem] w-[100%] bg-zinc-800 dark:bg-zinc-100 rounded-xl my-[0.15vw]'></span>
      </div>
     <div className='sm:flex sm:mt-0 mt-[15vw] sm:ml-0 ml-[-20vw] items-center justify-between gap-[6vw]'>
     <div className='font-semibold'>
        <ul className={`${menuOpen ? "flex" : "hidden"} sm:flex sm:flex-row flex-col items-start sm:items-center sm:gap-[5vw] sm:text-[1.15vw] text-[3vw]`}>
        <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700 dark:text-zinc-100"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Home
                                </NavLink>
                               
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700 dark:text-zinc-100"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Github
                                </NavLink>
                               
                            </li>
                            <li>
                                <NavLink
                                to="/project"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700 dark:text-zinc-100"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Projects
                                </NavLink>
                               
                            </li>
            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700 dark:text-zinc-100"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Contact
                                </NavLink>
                               
                            </li>
                           {/*  <li>
                                <NavLink
                                to="#"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   <Theme/>
                                </NavLink>
                               
                            </li> */}
            
        </ul>
      </div>
      <div className='flex items-center gap-[2vw] '>
                        <Theme />
                        <h1 className='sm:text-[1.7vw] text-[3vw] sm:flex hidden font-semibold'>Portfolio <span className='text-orange-700'>Website</span></h1>
                    </div>
{/*       <h1 className='sm:text-[1.7vw] text-[3vw] sm:flex hidden font-semibold'>Portfolio <span className='text-orange-700'>Website</span></h1>
 */}     </div>
    </div>
</>
  )
}

export default Header
