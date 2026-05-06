import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='flex flex-row bg-gray-200 items-center justify-between h12 text-bold text-xl p-4 md:p-24 lg:p-20'>
        <Link href="/">BARBER</Link>
        <p>All Right Reserverd</p>
    </div>
  )
}

export default Footer