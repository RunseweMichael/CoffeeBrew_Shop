import React from 'react'

export default function HowText() {
  return (
    <div className='howText'>
      <h1 className='how-title'>From Farm to Cup - Made Easy!!!</h1>

      <h4 className='how-subtitle'>Step 1: Choose Your Coffee</h4>
      <p className='how-p'>Select from our rotating menu of single-origin 
        beans or house blends. <br />
        Prefer light or dark?  We'll help you pick Your
        perfect match.</p> <br />

      <h4 className='how-subtitle'>Step 2: Customize Your Plan</h4>
      <p className='how-p'>Pick your grind(whole, drip, espresso) and how often
        you'd like your beans delivered. <br />
        No commitment, cancel anytime.
      </p> <br />

      <h4 className='how-subtitle'>Step 3: We Roast Fresh & Ship Fast </h4>
      <p className='how-p'>Your coffee is roasted after you order - never before - 
        and shipped within 24 hours.
      </p> <br />

      <h4 className='how-subtitle'>Step 4: Brew & Enjoy</h4>
      <p className='how-p'>Open the bag, inhale the aroma, and enjoy your 
        best brew yet.
      </p>

      <button type='submit' className='how-btn'>Start Your Subscription</button>
    </div>
  )
}
