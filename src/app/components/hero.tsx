import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";

const Hero = () => {
  return (
    <>
    <div className="h-[600px] bg-[url('/assets/p1.jpg')] bg-cover bg-center" ></div>
    <div className="h-[450px] bg-[url('/assets/hero.jpg')] bg-cover bg-center" ></div>
    <div className='h-[50px] bg-amber-200'>
        <div className='flex justify-evenly items-center text-black h-full'>
            <div className='flex items-center'>
            <TbTruckDelivery className='mr-2' /><h1>FREE SHIPPING ACCROSS PAKISTAN</h1>
            </div>
            <div className='flex items-center'>
            <IoIosCall className='mr-2' /><h1>CALL US AT +92312345678</h1>
            </div>
        </div>
    </div>
    <div className="flex justify-center text-center bg-white pt-7">
    <h3 className="flex text-xl ">
        <span className="before:content-[''] before:w-[600px] before:h-[2px] before:bg-black before:inline-block before:mr-4 before:align-middle"></span>
        <span className="text-black text-3xl">Trending Now</span>
        <span className="after:content-[''] after:w-[600px] after:h-[2px] after:bg-black after:inline-block after:ml-4 after:align-middle"></span>       
    </h3>
    
    </div>


    </>
  )
}

export default Hero
