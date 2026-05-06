import React from 'react'
import Image from 'next/image'

function Notification() {
  return (
    <div className='flex flex-row justify-between bg-blue-200   md:text-base cursor-pointer'>
     <div className=' flex   text-black px-4  text-sm '>Free delivery for all orders over 50$. Order your food now!</div>
    <div className='hidden md:flex  gap-4 items-center justify-end  flex-1'>
        <div className=' md:absolute top-3 r-2 lg:static flex items-center  gap-2 cursor-pointer  bg-orange-300 rounded-md'>
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>34434 7788889</span>
        </div>
       
       
       </div>
       </div>
  )
}

export default Notification