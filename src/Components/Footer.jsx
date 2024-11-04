import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/Edoceo.png";
import quali from "../assets/images/Qualicopy.png";

function Footer() {
  return (
    <footer className="footer">
            <div className="branding">
                <img src={logo} alt="Elec Learning Logo" className="footer-logo" />
                <p className="footer-description">Votre chemin vers l'expertise commence ici.</p>
                <div className="social-icons">
                    <i className="fab fa-tiktok"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>

            <div className="links">
                <h4>Liens</h4>
                <ul>
                    <li>Accueil</li>
                    <li>Nos formations</li>
                    <li>Qui sommes nous ?</li>
                </ul>
            </div>

            <div className="formations">
                <h4>Nos Formations</h4>
                <ul>
                    <li>Centre de formations d'apprentis (CFA)</li>
                    <li>Actions de formations (AF)</li>
                    <li>Qualifiante</li>
                </ul>
            </div>

     
            
            <div className="footer-bottom">
                <p>Edoceo, All Rights Reserved 2024</p>
                <img src={quali} alt="Qualiopi logo" className="qualiopi-logo" />
            </div>
        </footer>
  );
}

export default Footer;
