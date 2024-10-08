import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Row4 from './Row4'
import Row5 from './Row5'
import Row6 from './Row6'
import Row7 from './Row7'
import Row8 from './Row8'
import Row9 from './Row9'

function Home() {
  return (
    <div className=' w-full grid items-center justify-center bg-[whitesmoke] '>
        <div className=' lg:w-[90vw] md:w-[90vw] w-[100vw] flex flex-col bg-white  '>
        <Header />
        <Menu />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
        <Row7 />
        <Row8 />
        <Row9 />
        </div>
    </div>
  )
}

export default Home