import React from 'react'

function Row7() {
  return (
    <div className=' lg:h-[60vh] md:h-[70vh] lg:w-full grid grid-rows-[0.2fr_2fr] md:grid-rows-[0.5fr_2fr] h-[155vh] '>

        <div className='grid grid-cols-2 items-center '>
        <div className=' h-10 w-32 border rounded-md  ml-2 grid items-center justify-center '>
        <p className=' font-apple font-medium text-md '>Appliances</p>   
        </div>
        <div className=' grid items-center justify-end mr-2  ' >
        <p className=' font-apple font-medium text-md hover:underline cursor-pointer '>View</p>   
        </div>    
        </div>

        <div className='  grid p-2 box-border '>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/raya1.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Samsung Over-The-Range Microwave - 1.9 Cu. Ft. - Stainless Steel
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$349</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/raya2.jpg)] bg-contain bg-center bg-no-repeat  '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    De'Longhi Stilosa Manual Espresso Machine - Black/Stainless Steel
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$149</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/raya3.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Samsung 5.2 Cu. Ft. High Efficiency Front Load Washer - Black
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$949</p>
                    </p>
                    </div>
                </div>

                <div className=' border border-sky-200 rounded-md grid grid-rows-[2fr_1.1fr] gap-2 p-2 box-border '>
                   <div className=' grid '>
                   <div className=' bg-[url(./raysimg/raya4.jpg)] bg-contain bg-center bg-no-repeat '></div>
                   </div>
                    <div className='  grid  grid-rows-[1.5fr_1fr]  '>
                    <p className=' text-sm text-justify font-medium '>
                    Frigidaire 24" 54dB Built-In Dishwasher - Stainless Steel
                    </p>
                    <p className=' grid justify-center '>
                        <p className=' font-bold  tracking-wider'>$529</p>
                    </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Row7