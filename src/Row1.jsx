import React from 'react'
import first from './raysimg/raye4.webp'
import Slide from './Slide'
import Events from './Events'

function Row1() {
  return (
    <div className=' lg:h-[50vh] md:h-[55vh] se:h-[65vh] w-full h-[55vh] grid grid-rows-1 md:grid-rows-2 lg:grid-cols-[2fr_1fr] gap-2 box-border p-2  '>
        <div>
        <Slide/>
        </div>
        <div>
        <div><Events/></div>
        </div>
    </div>
  )
}

export default Row1