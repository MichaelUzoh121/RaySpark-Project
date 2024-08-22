import React from 'react'
import first from './raysimg/raytv1.png'
import sec from './raysimg/raylap1.png'
import thi from './raysimg/raybike.png'
import fou from './raysimg/raycam1.jpg'

function Row2() {
  return (
        <div className=' lg:h-[60vh] se:h-[195vh]  md:h-[85vh] lg:w-full grid grid-rows-[0.5fr_2fr] md:grid-rows-[1fr_2fr] h-[162vh] '>


        <div className='grid grid-cols-2 items-center  '>
        <div className=' h-10 w-28 border rounded-md  ml-2 grid items-center justify-center '>
        <p className=' font-apple font-medium text-md '>Today's Deal</p>   
        </div>
        <div className=' grid items-center justify-end mr-2  ' >
        <p className=' font-apple font-medium text-md hover:underline cursor-pointer '>View</p>   
        </div>    
        </div>


            <div className='  grid p-2 box-border '>
                <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>

                    <div className=' h-[38vh] se:h-[45vh] lg:h-[50vh] border cursor-pointer border-sky-200 rounded-md grid items-center justify-center'>
                    <div className=' lg:h-[20vw] lg:w-[20vw] md:h-[35vh] md:w-[40vw] grid grid-rows-2 md:grid-rows-[1.5fr_1.2fr] p-2 box-border '>
                            <div className=' grid justify-center ' >
                                <img src={first} className=' h-[140px] ' />
                                {/* <div className=' bg-[url(./raysimg/raytv1.jpg)] bg-contain  bg-no-repeat h-[150px] w-full '></div> */}
                            </div>
                            <div className='  grid grid-rows-[1.3fr_1fr] '>
                                
                                {/* The tv write ups */}

                                <div className='  grid lg:grid-rows-[2fr_1.5fr] '>
                                    <p className=' text-sm text-justify font-medium '>Samsung 55" 4K UHD QLED Tizen OS Smart TV- Titan Black</p>
                                    <p className=' grid justify-center '>
                                        <p className=' font-bold  tracking-wider'>$1,199</p>
                                    </p>
                                </div>


                                {/* the tv sub images */}


                                <div className=' grid grid-cols-3 p-2 gap-3'>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raytv1.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raytvi.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raytvii.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' border cursor-pointer h-[38vh] lg:h-[50vh] se:h-[45vh]  border-sky-200 rounded-md grid items-center justify-center '>
                    <div className=' lg:h-[20vw] lg:w-[20vw] md:h-[35vh] md:w-[40vw] grid grid-rows-2 md:grid-rows-[1.5fr_1.2fr] p-2 box-border '>
                            <div className=' grid justify-center ' >
                                <img src={sec} className=' h-[140px]'/>
                                {/* <div className=' bg-[url(./raysimg/raytv1.jpg)] bg-contain  bg-no-repeat h-[150px] w-full '></div> */}
                            </div>

                            {/* <div className='  grid lg:grid-rows-[1fr_1fr] h-24 grid-rows-[98%_2%] bg-black '> */}
                            <div className='  grid grid-rows-[1.3fr_1fr] '>
                                
                                {/* The laptop write ups */}

                                <div className='  grid grid-rows-[2fr_1.5fr] '>
                                    <p className=' text-sm text-justify font-medium '>
                                    Dell Inspiron 14" 2-in-1 Laptop - Lavender Blue (512GB / 16GB / Win11)
                                    </p>
                                    <p className=' grid justify-center '>
                                        <p className=' font-bold tracking-wider '>$899</p>
                                    </p>
                                </div>

                                {/* the tv sub images */}

                                <div className=' grid grid-cols-3 p-2 gap-3 '>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raylap1.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raylap2.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raylap3.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' border cursor-pointer h-[38vh] lg:h-[50vh] se:h-[45vh] border-sky-200 rounded-md grid items-center justify-center '>
                        <div className=' lg:h-[20vw] lg:w-[20vw] md:h-[35vh] md:w-[40vw] grid grid-rows-2 md:grid-rows-[1.5fr_1fr] p-2 box-border '>
                            <div className=' grid justify-center  ' >
                                <img src={thi} className=' h-[140px]' />
                            </div>

                            <div className=' grid grid-rows-[1.3fr_1fr]'>
                                
                                {/* The Bike write ups */}

                                <div className='  grid grid-rows-[2fr_1.5fr] '>
                                    <p className=' text-sm text-justify font-medium '>
                                        Segway Ninebot D38U Adult Eletric Scooter.
                                    </p>
                                    <p className=' grid justify-center '>
                                        <p className=' font-bold tracking-wider '>$499</p>
                                    </p>
                                </div>

                                {/* the Bike sub images */}
                    
                                <div className=' grid grid-cols-3 p-2 gap-3 '>
                                <div className='  rounded-sm shadow-md border  grid '>
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raybike.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raybike2.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raybike3.png)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' border cursor-pointer md:h-[38vh] lg:h-[50vh] se:h-[45vh] border-sky-200 rounded-md grid items-center justify-center '>
                    <div className=' lg:h-[20vw] lg:w-[20vw] md:h-[35vh] md:w-[40vw] grid grid-rows-2 md:grid-rows-[1.5fr_1.2fr] p-2 box-border  '>
                            <div className=' grid justify-center ' >
                            <img src={fou} className=' h-[140px] ' />
                            </div>
                            {/* <div className='  grid lg:grid-rows-[1.3fr_fr] h-24 grid-rows-[98%_2%] '> */}
                            <div className='  grid grid-rows-[1.3fr_1fr] '>

                                {/* The cam write ups */}

                                <div className='  grid grid-rows-[2fr_1.5fr] '>
                                    <p className=' text-sm text-justify font-medium '>
                                    DJI Pocket 2 3-Axis Stabilized 4K Handheld Camera - Black
                                    </p>
                                    <p className=' grid justify-center '>
                                        <p className=' font-bold  tracking-wider'>$394</p>
                                    </p>
                                </div>


                                {/* the cam sub images */}


                                <div className=' grid grid-cols-3 p-2 gap-3 '>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raycam1.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raycam2.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                <div className='  rounded-sm shadow-md border  grid '>
                                    {/* <img src={first} className=' h-[35px] ' /> */}
                                     <div className=' grid '>
                                     <div className=' bg-[url(./raysimg/raycam3.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                                     </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
  )
}

export default Row2