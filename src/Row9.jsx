import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Row9() {
  return (
    <div className=' lg:h-[50vh] lg:w-full md:h-[45vh] bg-sky-200  grid lg:grid-rows-[2fr_0.5fr]  gap-2 '>
      <div className='  grid items-center justify-center '>
        <div className='  lg:h-[35vh] md:h-[40vh] lg:w-[80vw] w-[80vw] h-[85vh] grid lg:grid-cols-4 md:grid-cols-2  gap-2  '>

          <div className='  grid grid-rows-[0.8fr_2fr] lg:border-r border-sky-100  lg:h-[35vh]  '>
              <div className='  grid items-center justify-center lg:justify-start  '>
                <p className=' text-xl font-bold pl-2 '> About</p>
              </div>
              <div className=' grid items-center justify-center text-base font-semibold text-center '>
                <p>About Us</p>
                <p>Know Us</p>
                <p>Careers</p>
              </div>
          </div>

          <div className='  grid grid-rows-[0.8fr_2fr] lg:border-r border-sky-100 '>
              <div className='  grid items-center justify-center lg:justify-start '>
                <p className=' text-xl font-bold pl-2 '> Policy</p>
              </div>
              <div className=' grid items-center justify-center text-base font-semibold text-center '>
                <p>Privacy</p>
                <p>Return Policy</p>
                <p>Terms and Conditions</p>
              </div>
          </div>

          <div className='  grid grid-rows-[0.8fr_2fr] lg:border-r border-sky-100 '>
              <div className='  grid items-center justify-center lg:justify-start '>
                <p className=' text-xl font-bold pl-2 '> Help</p>
              </div>
              <div className=' grid items-center justify-center text-base font-semibold text-center '>
                <p>FAQs</p>
                <p>Customer Support</p>
                <p>Troubleshooting</p>
              </div>
          </div>
          
          <div className='  grid grid-rows-[0.8fr_2fr] lg:border-r border-sky-100 '>
              <div className='  grid items-center justify-center lg:justify-start '>
                <p className=' text-xl font-bold pl-2 '> Contact</p>
              </div>
              <div className=' grid grid-rows-[2fr_1fr] '>
              <div className=' grid items-center justify-center text-base font-semibold text-center '>
                <a href="mailto:uzohmichael06@gmail.com"></a>
                <a href="tel:+2349015517032"></a>
              </div>
              <div className='  grid  '>
                <div className='  grid grid-cols-3 gap-2 p-1  '>
                  <div className=' shadow-md rounded-3xl grid items-center justify-center '>
                    <a href="https://www.instagram.com/michaeltheecoder" className=' text-xl '><FaInstagram /></a>
                  </div>
                  <div className=' shadow-md rounded-3xl grid items-center justify-center '>
                    <a href="https://www.facebook.com/profile.php?id=61553010851766" className=' text-xl '><FaFacebook /></a>
                  </div>
                  <div className=' shadow-md rounded-3xl grid items-center justify-center '>
                    <a href="https://x.com/michaelthecode" className=' text-xl '><FaXTwitter /></a>
                  </div>
                  <div className=' shadow-md rounded-3xl grid items-center justify-center '>
                    <a href="www.linkedin.com/in/michael-uzoh-b035b92b6" className=' text-xl '><FaLinkedin /></a>
                  </div>
                  {/* <div className=' shadow-md rounded-3xl grid items-center justify-center '>
                    <p className=' text-xl '><FaYoutube /></p>
                  </div> */}
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className=' border-t border-black grid items-center justify-center h-10 '>
        <p className=' text-sm '>&copy;2024 RaySpark, All Rights Reserverd.</p>
      </div>
    </div>
  )
}

export default Row9