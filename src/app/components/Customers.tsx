import React from 'react'
import Container from './Container'
import { customerItems, featuredItems } from '@/data'
import Image from "next/image";

function Customers() {
  return (
    <Container>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center m-6 text-yellow-400">
        Our Customers Styles
      </h1>

      {/* SCROLL SECTION */}
      <div className="overflow-x-auto">
        
        <div className="flex gap-2 w-max">

          {customerItems.map((item) => (

            <div
              key={item.id}
              className="flex flex-col w-[300px] h-[60vh] items-center hover:bg-fuchsia-200 gap-2 flex-shrink-0"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[80%]">
                <Image
                  src={item.image}
                  alt={`Customer ${item.id}`}
                  fill
                  className="object-contain"
                />
              </div>

            </div>

          ))}

        </div>

      </div>

    </Container>
  )
}

export default Customers