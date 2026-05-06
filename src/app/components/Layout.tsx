import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Notification from './Notification'
import Footer from './Footer'

interface ILayoutProps {
    children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
        <Notification />
        <Navbar />
       
      {children}
      <Footer />
    </div>
  )
}

export default Layout