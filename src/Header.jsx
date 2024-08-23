import React from 'react'
import first from './raysimg/rayslogo.png'
import { IoIosSearch } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className=' grid lg:h-[15vh] md:h-[15vh] sm:h-[15vh] lg:w-[90vw] md:w-[90vw] sm:w-[90vw] w-[100vw] h-[10vh] items-center justify-center  '>
        <div className=' grid  lg:h-[10vh] md:h-[10vh] h-[8vh] lg:w-[90vw] md:w-[90vw] sm:w-[90vw] w-[100vw]  grid-cols-[1fr_2.5fr_1fr] md:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr]   '>
            <div className=' grid items-center  '>
                <img src={first} className=' h-[60px] ' />
                {/* <div className=' bg-[url(./raysimg/rayslogo.png)] bg-contain  bg-no-repeat grid self-center '></div> */}
            </div>
            <div className=' grid items-center w-full p-2 '>
                <div className=' flex  '>
                    <input type="search" className=' h-9  w-full border-2 rounded-[5px_0px_0px_5px] border-sky-100 p-2 outline-none ' placeholder='Search for your items...' />
                    <p className=' h-9 w-12 bg-sky-200 grid items-center justify-center text-2xl rounded-[0px_5px_5px_0px] '><IoIosSearch /></p>
                </div>
            </div>
            <div className='  grid items-center justify-end pr-3 grid-cols-[2fr_0.5fr]  '>
                <div className=' flex gap-5 hidden md:flex lg:flex justify-end '>
                    <button className=' h-7 w-7 bg-slate-200 rounded grid items-center justify-center '>
                    <GoHome />
                    </button>
                    <button className=' h-7 w-7 bg-slate-200 rounded grid items-center justify-center '>
                    <VscAccount />
                    </button>
                    <button className=' h-7 w-7 bg-slate-200 rounded grid items-center justify-center '>
                    <CiShoppingCart />
                    </button>
                </div>
                <div className=' grid justify-end '>
                    <button className=' h-7 w-7 bg-slate-200 rounded flex items-center justify-center md:hidden lg:hidden '>
                    <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header