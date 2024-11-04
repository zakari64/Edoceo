import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Carte from './Components/Carte';
import Chatbot from './Components/Chatbot'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage';
import About  from './Components/About';
import Formations from './Components/Formations'
import Contact from './Components/Contact'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/carte" element={<Carte/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/formation" element={<Formations/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
