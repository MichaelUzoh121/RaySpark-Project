import React from 'react'

function Events() {
  return (
    <div className='  grid p-2 box-border lg:h-[40vh] '>
            <div className=' grid grid-cols-2 gap-3 '>
                <div className=' bg-sky-100 grid rounded-md  '>
                    <div className= ' bg-[url(./raysimg/raye1.png)] bg-contain bg-center  bg-no-repeat  grid grid-rows-[2fr_1fr] '>
                        <div className='  '></div>
                        <div className=' grid items-center justify-center '>
                            <button className=' h-10 w-24 bg-sky-700 rounded '>
                                <p className=' text-lg font-bold text-white '>Shop  Now</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' bg-sky-100 grid rounded-md items-center md:pl-20 lg:pl-0 '>
                    <div className= ' bg-[url(./raysimg/raye2.webp)] bg-contain  bg-no-repeat  grid grid-rows-[2fr_1fr] '>
                        <div className='  '></div>
                        <div className=' grid items-center justify-center md:pr-20 lg:pr-0 '>
                            <button className=' h-10 w-24 bg-sky-700 rounded '>
                                <p className=' text-lg font-bold text-white '>Shop  Now</p>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className=' bg-sky-100 grid rounded-md  md:pl-20 lg:pl-0  '>
                <div className=' bg-[url(./raysimg/raye2.webp)] bg-contain bg-no-repeat   '>
                    <div className=' grid  grid-rows-[2fr_1fr] '>
                <div className= ' ' ></div>
                <div className=' grid items-center justify-center md:pr-20 lg:pr-0 '>
                    <button className=' h-10 w-24 bg-sky-700 rounded  '>
                        <p className=' text-lg font-bold text-white  '>Shop  Now</p>
                    </button>
                </div>
                </div>
                </div>
                </div> */}
                <div className=' bg-sky-100 grid rounded-md md:pl-20 lg:pl-0 '>
                    <div className= ' bg-[url(./raysimg/raye3.webp)] bg-contain  bg-no-repeat  grid grid-rows-[2fr_1fr] '>
                        <div className='  '></div>
                        <div className=' grid items-center justify-center md:pr-20 lg:pr-0  '>
                            <button className=' h-10 w-24 bg-sky-700 rounded '>
                                <p className=' text-lg font-bold text-white '>Shop  Now</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' bg-sky-100 grid rounded-md md:pl-20 lg:pl-0 '>
                    <div className= ' bg-[url(./raysimg/raye4.webp)] bg-contain  bg-no-repeat  grid grid-rows-[2fr_1fr] '>
                        <div className='  '></div>
                        <div className=' grid items-center justify-center md:pr-20 lg:pr-0 '>
                            <button className=' h-10 w-24 bg-sky-700 rounded '>
                                <p className=' text-lg font-bold text-white '>Shop  Now</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Events