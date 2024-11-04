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
          <div className="title">Empower your journey </div>
          <div className="subtitle">Inspiring minds, shaping futures</div>
          <p>
            At Edoceo, our mission is to nurture and empower individuals to
            reach their full potential. With a commitment to innovative learning
            and personalized support, our center provides a dynamic environment
            that fosters growth, creativity, and excellence. Join us on a
            journey of discovery, where aspirations are transformed into
            achievements and lifelong learning is cultivated.
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
