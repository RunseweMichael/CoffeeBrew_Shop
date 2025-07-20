import React from 'react'
import ContactText from './ContactText'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContactMain() {
  return (
    <div className='contact-home'>
      <div className='contact-main'>
        <Navbar />
        <h1 className='contact-title'>CONTACT US</h1>
        <ContactText />
      </div>
      <Footer />
    </div>
  )
}
