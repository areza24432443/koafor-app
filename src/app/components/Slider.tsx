

"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



const data = [
    {
        id:1,
        title:"Clean fades with modern styling",
        image:"/slide1.jpg",
    },
    {
        id:2,
        title:"Professional coloring for modern style",
        image:"/slide2.jpg",
    },
    {
        id:3,
        title:"Professional styling for modern men",
        image:"/slide3.jpg",
    },
];


function Slider() {

    const [currentSlider , setCurrentSlider] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>setCurrentSlider((prev)=>(prev === data.length -1 ? 0 :prev + 1)),2000);

        return () =>clearInterval(interval);
       

    },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
        {/* textcotainner */}
        <div className=' flex-1 flex flex-col items-center justify-center gap-8 md:p-10 text-red-500 font-bold bg-fuchsia-50 '>
            <h1 className='text-5xl uppercase text-center p-4 md:text-6xl lg:text-7xl'>{data[currentSlider].title}</h1>

            <Link href="/reserve">
        <button className='bg-red-500 text-white rounded-md px-4 py-2 cursor-pointer'>Book Appointment</button>
      </Link>

        </div>

        {/* imagecontainer */}
        <div className='w-full  flex-1 relative '>
            <Image src={data[currentSlider].image} alt="" fill className='object-cover' />
        </div>
    </div>
  )
}

export default Slider