import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../FramerMotion/variants';

export default function LandingText() {
  
  return (
    <div className='landing'>
    <div className='landingText'>
        <motion.h1
            variants={fadeIn('right', 1)}
            initial = 'hidden'
            whileInView = 'show'
            viewport = {{once: false, amount:0}}>
                Coffee &nbsp;
        </motion.h1>
    </div>  

    <div className='landingText'>
        <motion.h1
            variants={fadeIn('up', 1)}
            initial = 'hidden'
            whileInView = 'show'
            viewport = {{once: false, amount:0}}>
                Brew
        </motion.h1>
    </div>
    </div>
  )
}
