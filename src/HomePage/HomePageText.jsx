import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePageText() {
  return (
    <div className='homePageText'>
      <h1 className='greeting'>Hello {localStorage.getItem('userName')} 👋☕</h1>
      <h2 className='home-title'>WELCOME TO COFFEE BREW!!!</h2>
      <h3 className='home-subtitle'>Brewed to Perfection, Delivered with Passion.</h3>
      <h4 className='home-h4'>At Coffee Brew, we roast fresh, ethically sourced coffee beans with one goal: to fill every cup with richness, warmth, and joy. Whether you’re brewing at home or grabbing a cup on the go, experience coffee the way it was meant to be.</h4>
      <Link to='/products'>
        <button type='button' className='homepage-btn'>☕ Shop Our Coffee</button>
      </Link>
    </div>
  )
}
  