import React from 'react'

export default function LocationText() {
  return (
    <div>
       <h3 className='location-subtitle'>Find us in the Heart of the City</h3>
       <p className='location-description'>Nestled in the vibrant Ocean Parade Towers, 
            our café is your perfect daily stop for freshly brewed
            coffee, artisan pastries, and a cozy atmosphere.
        </p>
        <br />
        <address>
            <h3 className='location-subtitle'>ADDRESS:</h3>
            <p className='location-description'>Coffee Brew</p>
            <p className='location-description'>3rd Avenue, Plot 15, Banana Island</p>
            <p className='location-description'>Lagos, Nigeria.</p>
        </address>
        <br />
        <div>
            <h3 className='location-subtitle'>Open Hours:</h3>
            <p className='location-description'>Monday – Friday: 7:00 AM – 7:00 PM</p>
            <p className='location-description'>Saturday – Sunday: 8:00 AM – 6:00 PM</p>
        </div>
        <br />
        <div>
            <h3 className='location-subtitle'>Getting Here:</h3>
            <p className='location-description'>We're easily accessible by public transit and just a 
                short walk from The Palms Shopping Mall. 
                Free street parking is available nearby, and bike 
                racks are located right outside our door.
            </p> <br />
            <p className='location-description'>
                Whether you're meeting a friend, grabbing a 
                quick espresso on your way to work, or settling
                in with a book, our doors are open and the 
                coffee is always fresh.
            </p>
        </div>
        <br />
        <div>
            <h3 className='location-subtitle'>Reach out to Us:</h3>
            <p className='location-description'>📞 Questions? Call us at (+234) 907-7781-076</p>
            <p className='location-description'>📧 Or email: coffeebrew@gmail.com</p>
        </div>
    </div>
  )
}
