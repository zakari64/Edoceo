import React from 'react';
import '../styles/herosection.css';
import plane from '../assets/images/peoplePlane.mp4'


function HeroSection() {
    return (
  <div className="video-container">
      <video 
          src={plane} 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ 
              width: '100%', 
              height: '100vh', 
              objectFit: 'cover' 
          }} 
      />
     
  </div>
 
    )
  }
  
  export default HeroSection;