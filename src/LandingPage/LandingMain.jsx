import React,  { useEffect, useState } from 'react'
import LandingIcon from './LandingIcon'
import LandingText from './LandingText'

export default function LandingMain() {
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const name = window.prompt("Welcome! What's your name?");
    if (name) {
      setUserName(name);
      localStorage.setItem('userName', name)
    }
  }, []);

  useEffect(() => {
    alert("Click on the Coffee Icon to enter the Website⚡");
  }, []);


  return (
    <div className='landingPage'>
      <LandingIcon />
      <LandingText />
    </div>
  )
}
