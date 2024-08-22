import React from 'react'
import { IoIosLaptop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { BiCctv } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiVacuumCleaner } from "react-icons/gi";

function Menu() {
  return (
    <div className=' h-[35vh] lg:h-[20vh] md:h-[20vh] grid items-center justify-center '>
        <div className=' h-[35vh]  lg:h-[20vh] md:h-[20vh] w-[90vw] grid grid-rows-[0.5fr_1fr] md:grid-rows-[1fr_2fr] lg:grid-rows-2 '>
            <div className='   grid items-center '>
                <div className=' h-10 w-24 border rounded-md  ml-2 grid items-center justify-center '>
                    <p className=' font-apple font-medium text-md '>Categories</p>
                </div>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 p-2 box-border font-apple text-md font-semibold  '>
            <button className='bg-slate-200 rounded-lg  flex items-center justify-center gap-2'>
                <p><GiVacuumCleaner /></p>
                    <p>Appliances</p>
                </button>
                <button className=' bg-slate-200 rounded-lg flex items-center justify-center gap-2 text-md '>
                    <p ><IoIosLaptop /></p>
                    <p>Laptop</p>
                </button>
                <button className=' bg-slate-200 rounded-lg flex items-center justify-center gap-2 text-md '>
                    <p><CiMobile3 /></p>
                    <p>Phones</p>
                </button>
                <button className='bg-slate-200 rounded-lg  flex items-center justify-center gap-2'>
                    <p><PiTelevisionSimpleLight /></p>
                    <p>Television</p>
                </button>
                <button className='bg-slate-200 rounded-lg  flex items-center justify-center gap-2'>
                    <p><CiCamera /></p>
                    <p>Camera</p>
                </button>
                <button className='bg-slate-200 rounded-lg  flex items-center justify-center gap-2'>
                    <p><CiHeadphones /></p>
                    <p>Headphones</p>
                </button>
                <button className='bg-slate-200 rounded-lg  flex items-center justify-center gap-2'>
                    <p><BiCctv /></p>
                    <p>Smart Home</p>
                </button>
                <button className='bg-slate-200 rounded-lg  grid items-center justify-center'>
                    <p>Others</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Menu