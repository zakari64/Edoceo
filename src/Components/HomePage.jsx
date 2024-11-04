import React from 'react'
import HeroLayout from './Herolayout'
import Chatbot from './Chatbot'
import Navbar from './Navbar'
import Presentation from './Presentation'
import  Footer from './Footer'
import Carte from  './Carte'
import Contact from './Contact'

function HomePage() {
  return (
    <div>
        <Navbar />
        <HeroLayout />
        <Presentation />
        <Chatbot />
        <Footer/>
    </div>
  )
}

export default HomePage