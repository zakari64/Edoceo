import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/Edoceo.png";
import quali from "../assets/images/qualiopi.webp";

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
                    <li>Contactez-Nous !</li>
                </ul>
            </div>

            <div className="formations">
                <h4>Nos Formations</h4>
                <ul>
                    <li>Formation P1</li>
                    <li>Formation P2</li>
                    <li>Formation P3</li>
                    <li>Formation P1 + P2</li>
                </ul>
            </div>

            <div className="newsletter">
                <h4>S'abonner</h4>
                <p>Rejoignez notre newsletter pour rester informé de nos mises à jour.</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Insérez votre mail" />
                    <button type="submit">S'abonner</button>
                </div>
                <p className="newsletter-note">
                    En vous abonnant, vous acceptez notre politique de confidentialité et consentez à recevoir des mises à jour de notre Organisme.
                </p>
            </div>
            
            <div className="footer-bottom">
                <p>Edoceo, All Rights Reserved 2024</p>
                <img src={quali} alt="Qualiopi logo" className="qualiopi-logo" />
            </div>
        </footer>
  );
}

export default Footer;
