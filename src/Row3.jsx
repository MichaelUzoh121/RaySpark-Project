import React from 'react'

function Row3() {
  return (
    <div className=' lg:h-[60vh] md:h-[70vh] lg:w-full grid grid-rows-[0.2fr_2fr] md:grid-rows-[0.5fr_2fr] h-[155vh]'>


        <div className='grid grid-cols-2 items-center '>
        <div className=' h-10 w-28 border rounded-md  ml-2 grid items-center justify-center '>
        <p className=' font-apple font-medium text-md '>Top Deals</p>   
        </div>
        <div className=' grid items-center justify-end mr-2  ' >
        <p className=' font-apple font-medium text-md hover:underline cursor-pointer '>View</p>   
        </div>    
        </div>

        <div className='  grid p-2 box-border '>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>

                
                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/rayt1.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    JBL Flip 5 Waterproof Bluetooth Wireless Speaker - Black    
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$159</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/rayt2.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Philips Multigroom 7000 All-In-One Trimmer  
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$39</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/rayt3.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Yamaha PSR-E273 61-Key Portable Electric Keyboard
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$169</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/rayt4.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Samsung 5.2 Cu. Ft. High Efficiency Front Load Washer - Black  
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$1,799</p>
                    </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Row3