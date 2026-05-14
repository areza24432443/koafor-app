import React from 'react'
import Image from "next/image";
import { featuredItems } from '@/data';

  function Featured() {
  return (
//     <div className="w-screen overflow-x-scroll text-red-500">

//         {/* wrapper */}
//         <div className="w-max flex flex-col items-center justify-center gap-8">
//             {/* SINGLE item */}  
   
//            {featuredItems.map((item) => (  
//              <div key={item.id} className="relative flex-1 w-full ">
//                <Image src={item.image} alt={item.title} fill className="object-cover" />
//              </div>
           
            
//            <div className="relative flex-1 w-full ">
//                  <Image src="/portfolio/portfolio-1.jpg" alt="Featured Service" fill className="object-cover" />
//                 </div>
//                  {/* TEXT AND PRICE */}
//              <div className="relative flex flex-col items-center justify-center">
//                 <h2 className="text-xl font-bold mb-4">خدمات ویژه</h2>
//                 <span className="text-gray-400">قیمت 12,000 تومان</span>
//              </div>

//            ) )}


//         </div>
//    </div>   
     
<div className="w-screen overflow-x-auto text-red-500">

    <div className=" flex items-center justify-center gap-8">
         
        <h1 className="text-3xl font-bold text-center m-6 text-yellow-400">
        SERVICES
        </h1>
     
    </div>
  
  {/* wrapper */}
  <div className="flex gap-2">

    {featuredItems.map((item) => (
      
      <div
        key={item.id}
        className="flex flex-col w-[300px] h-[60vh] items-center hover:bg-fuchsia-200 gap-2 md:w-[33vw] lg:w-[25vw] flex-shrink-0"
      >
        
        {/* IMAGE */}
        <div className="relative w-full h-[80%]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">
            {item.title}
          </h2>

          <span className="text-gray-400">
            Price {item.price} 
          </span>
        </div>

      </div>

    ))}

  </div>
</div>
           
                
           
  )
}

export default Featured