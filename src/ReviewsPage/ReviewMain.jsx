import React from 'react'
import ReviewText from './ReviewText'
import Navbar from './Navbar'
import Footer from './Footer'


export default function ReviewMain() {
  return (
    <div className='reviewContainer'>
      <Navbar />
      <h1 className='review-title'>What Our Customers Are Saying</h1>
      <ReviewText />
      <Footer />
    </div>
  )
}
