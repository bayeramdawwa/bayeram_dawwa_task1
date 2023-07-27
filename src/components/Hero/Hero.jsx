import React from 'react'
import './Herostyle.css';
function Hero() {
  return (
    <div className='Hero'>
     
      <div className="HeroContaint">
        <h2 className='Hero-h2'>The modern landing page for</h2>
        <h1 className='Hero-h1'>React developer</h1>
        <p className='Hero-p'>The easiest way to build React landing page in seconds.</p>
        <a href='#' className='Hero-btn'>Download Your Free Version</a>
      </div>
    </div>
  )
}

export default Hero