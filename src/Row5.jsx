import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Row5() {
  return (
    <div className=' lg:h-[70vh] md:h-[60vh] h-[85vh] w-full grid grid-rows-[0.5fr_2fr] gap-2 '>
      <div className=' grid items-center justify-center  '>
        <p className=' text-2xl font-bold font-verdana '>Latest Device</p>
      </div>
      <div className=' grid  md:grid-cols-2 lg:grid-cols-2 grid-rows-1  p-2 box-border gap-2 '>

         <div className=' border shadow-md grid grid-rows-[2fr_1.2fr]'>
        <div className=' grid '> 
          <div className=' bg-[url(./raysimg/rayl1.jpg)] bg-contain bg-center bg-no-repeat '></div>
        </div>
          <div className='  grid grid-rows-[2fr_1.4fr] '>
            <div className='  '>
              <p className=' font-bold text-base  pl-2 '>M3 arrives on Mackbook Air</p>
              <p className=' text-sm pl-2 font-medium '>The M3 chip brings even greater capabilities to the superportable MacBook Air</p>
            </div>
            <div className=' flex items-center cursor-pointer'>
              <p className=' text-md font-medium pl-2 hover:underline'>Shop Now</p>
              <p className=' grid items-end text-sm pt-1 '><IoIosArrowForward /></p>
            </div>
          </div>
        </div>
        <div className=' border shadow-md grid grid-rows-[2fr_1.2fr]  '>
        <div className=' grid '>
          <div className=' bg-[url(./raysimg/rayl22.png)] bg-contain bg-center bg-no-repeat '></div>
        </div>
          <div className='  grid grid-rows-[2fr_1.4fr] '>
            <div className='  '>
              <p className=' font-bold text-base  pl-2 '>Apple Vision Pro</p>
              <p className=' text-sm pl-2 font-medium '>Apple Vision Pro is powered by visionOS, macOS, iOS, and iPadOS</p>
            </div>
            <div className=' flex items-center cursor-pointer'>
              <p className=' text-md font-medium pl-2 hover:underline   '>Shop Now</p>
              <p className=' grid items-end text-sm pt-1 '><IoIosArrowForward /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row5