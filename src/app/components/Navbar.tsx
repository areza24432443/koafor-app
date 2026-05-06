"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {

    const pathname = usePathname()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Appointment", href: "/admin" },
        { name: "Reservation", href: "/reserve" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "About", href: "/about" }
    ]

  return (

    <nav className='shadow p-4 flex flex-row justify-end gap-4'>

        

        <div className='mr-auto'>
            {/* <h1 className='text-2xl font-bold text-yellow-400'>Barber Kami </h1> */}
            <Link href="/" className='text-xl md:font-bold flex-1 md:items-center'>Barber Kami</Link>
        </div>
        {
            navLinks.map((link) => (
                <Link className={`mr-4 ${pathname === link.href ? 'text-blue-500' : 'text-gray-500'}`} key={link.name} href={link.href}>{link.name}</Link>
            ))
        }

        
    </nav>
  )
}

export default Navbar