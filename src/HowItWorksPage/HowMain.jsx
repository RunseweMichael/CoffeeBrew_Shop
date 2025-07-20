import React from 'react'
import Navbar from './Navbar'
import HowText from './HowText'
import HowVid from './HowVid'
import Footer from './Footer'


export default function HowMain() {
  return (
    <div className='how-container'>
      <Navbar />
      <HowText />
      <HowVid />
      <Footer />
    </div>
  )
}
