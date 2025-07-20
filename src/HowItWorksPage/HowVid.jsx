import React from 'react'
import video from '../assets/CoffeeImages/PinGrab_1750682625251.mp4'

export default function HowVid() {
  return (
    <div className='vid-container'>
      <video autoPlay loop playsInline>
        <source src={video} type='video/mp4'/>
      </video>
    </div>
  )
}
