import React from 'react'
import HomePageText from './HomePageText'
import Navbar from './Navbar'
import Footer from './Footer'


export default function HomePageMain() {
  return (
    <div className='homepageContainer'>
      <Navbar />
      <HomePageText />
      <Footer />
    </div>
  )
}
