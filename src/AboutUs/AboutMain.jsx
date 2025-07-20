import React from 'react'
import Navbar from './Navbar'
import AboutText from './AboutText'
import Footer from './Footer'


export default function AboutMain() {
  return (
    <div className='aboutContainer'>
      <Navbar />
      <AboutText />
      <Footer />
    </div>
  )
}
