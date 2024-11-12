import React from "react";
import "../styles/about.css";
import Navbar from "./Navbar";
import Footer from './Footer'
import team from "../assets/icons/team.png";

const AboutUs = () => {

  return (
    <div className="about-wrapper">
      <Navbar />
      <div className="container">
        <div className="text-section">
          <div className="title">Qui sommes nous ?</div>
          <div className="subtitle"> Apprendre aujourd'hui, réussir demain.</div>
          <p>
          Bienvenue au Centre d'Apprentissage Lumière, votre destination pour l'éducation et
           développement personnel. Notre centre est dédié à offrir des cours variés
            et innovants pour étudiants de tous âges, dans un environnement accueillant 
            et stimulant. 

          </p>
          <a href="#" className="button">
            Get in Touch
          </a>
        </div>
        <div className="image-section">
          <img src={team} alt="About Us" />
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default AboutUs;
