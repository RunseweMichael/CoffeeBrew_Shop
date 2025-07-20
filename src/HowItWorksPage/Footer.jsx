import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footerContainer-how'>
        <div>
            <h1 className='home-title footer-title'>COFFEE BREW 👋☕</h1>
            <p className='home-subtitle footer-subtitle'>Brewing More Than Just Coffee</p>
        </div>

        <div className='footer-section'>
            <div>
            <h3 className='footer-head'>INFORMATION</h3>
            <Link to="/homepage"><div className='footer-links'>Home</div></Link>
            <Link to="/about"><div className='footer-links'>About Us</div></Link>
            <Link to="/products"><div className='footer-links'>Products</div></Link>
            <Link to="/how"><div className='footer-links'>How It Works</div></Link>
            <Link to="/review"><div className='footer-links'>Reviews</div></Link>
            <Link to="/location"><div className='footer-links'>Cafe Location</div></Link>
            <Link to="/contact"><div className='footer-links'>Contact Us</div></Link>
        </div>

        <div>
          <h3 className='footer-head'>CONTACT US</h3>
          <div className='footer-contact'>
            <a href="mailto:runsewemichael93@gmail.com" className='footer-links'>Email Us</a>
            <a href="tel:+234 9077781076" className='footer-links'>+ (234) 907-7781-076</a>
          </div>
        </div>

        <div>
          <h3 className='footer-head'>OUR COMPANY</h3>
          <div className='footer-address'>
            <p>3rd Avenue, Plot 15, Banana Island, Lagos, Nigeria.</p>
            <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
            <p>Saturday – Sunday: 8:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div>
        <div className='socials'>
          <a href=""><FaFacebook style={{ fontSize: '30px', color: '#a34818' }}/></a>
          <a href="https://twitter.com/#"><FaTwitter style={{ fontSize: '30px', color: '#a34818' }}/></a>
          <a href="#"><FaSquareInstagram style={{ fontSize: '30px', color: '#a34818' }}/></a>
          <a href="https://wa.me/2349077781076"><FaWhatsapp style={{ fontSize: '30px', color: '#a34818' }}/></a>
        </div>

        <div className='copyright'>
          Copyright &copy; 2025 Coffee Brew. All rights reserved.
          <p>Website built and deployed by Michael Runsewe.</p>
        </div>
      </div>
    </div>
  )
}
