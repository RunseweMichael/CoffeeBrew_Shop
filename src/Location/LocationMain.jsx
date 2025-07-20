import React from 'react'
import Navbar from './Navbar'
import LocationText from './LocationText'
// import MapComponent from './MapComponent'
import Footer from './Footer'
import ContactText from '../ContactUS/ContactText'


export default function LocationMain() {
  return (
    <div className='locationContainer'>
      <Navbar />
      <h1 className='location-header'>📍 OUR CAFE LOCATION</h1>
      {/* <div className='map-flex'> */}
        <LocationText />
        {/* <MapComponent /> */}
      {/* </div> */}
      <Footer />
      
    </div>
  )
}
