import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <h1><span>I'm Vishwajeet Alugade,</span> frontend developer based in India.</h1>
        <p>"Frontend developer building responsive, user-friendly websites using HTML, CSS, JavaScript, and React to deliver engaging digital experiences."</p>
        <div className="hero-action">
            <button className='hero-connect ' onClick={() => window.open("https://www.linkedin.com/in/vishwajeet-alugade/", "_blank")}>LinkedIn</button>
            <div className="hero-resume">My resume</div>
            
        </div>
    </div>
  )
}

export default Hero