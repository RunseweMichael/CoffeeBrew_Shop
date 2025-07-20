import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function LandingIcon() {
  return (
    <motion.div
        initial = {{scale:1}}
        whileInView = {{scale:1.2}}
        transition={{duration:0.8, repeat: Infinity, repeatType:'reverse'}}
        className='pulse'
        >
        <Link to="/homepage">
            <GiCoffeeCup style={{color:'#a34818', fontSize:50}}/>
        </Link> 
    </motion.div>
  )
}
