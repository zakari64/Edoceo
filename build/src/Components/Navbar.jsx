import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/Edoceo.png";
import { Link } from "react-router-dom";
import user from '../assets/icons/user.png'
import cart from '../assets/icons/cart.png'



function Navbar() {

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Logo on the top-left corner */}
      <div className="navbar-logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" style={{ textDecoration: "none", listStyle: "none" }}>
          <a href="#" className="nav-item">
            Acceuil
          </a>
        </Link>
        <div
          className="nav-item"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/formation" style={{ textDecoration: "none", listStyle: "none" }}>
          <a className="nav-item" href="#" style={{ textDecoration: "none", listStyle: "none" }}>
            Nos Formations
          </a>
          </Link>
          
          {dropdownOpen && (
            <div className="dropdown">
              <a href="#" className="dropdown-item">
              Centre de formation d'apprentis (CFA)
              </a>
              <a href="#" className="dropdown-item">
              Actions de formartions (AF)
              </a>
              <a href="#" className="dropdown-item">
                Qualifiante
              </a>
            </div>
          )}
        </div>
        <Link to="/about" style={{textDecoration: "none", listStyle: "none"}}>
          <a href="#" className="nav-item">
            Qui sommes nous ?
          </a>
        </Link>
        
        <Link to="/contact" style={{textDecoration: "none", listStyle: "none"}}>
          <a href="#" className="nav-item">
            Contact
          </a>
        </Link>
      </div>

      {/* Button on the top-right corner */}
      <div className="navbar-button">
        <button>
            <img style={{width : '30px'}} src={user} />
        </button>
    </div>
    </nav>
  );
}

export default Navbar;
