import React from 'react'
import video from '/CoffeeImages/PinGrab_1750682625251.mp4'

export default function HowVid() {
  return (
    <div className='vid-container'>
      <video autoPlay muted loop playsInline
      poster='/ProductsImg/how-alternative.jpg'>
        <source src={video} type='video/mp4'/>
      </video>
    </div>
  )
}
