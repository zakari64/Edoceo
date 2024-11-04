import React from "react";
import "../styles/presentation.css"; 
import plans from '../assets/images/plans.webp'


const CompanyLaunch = () => {
  return (
    <div className="company-launch-container">
      <div className="text-section">
        <h1>Lancez votre société,<br />simplement.</h1>
        <p>
          Créez votre entreprise rapidement en étant bien accompagné. Gérez
          votre juridique, comptabilité et finances dans la même application.
          Accompagnement personnalisé par un juriste dédié jusqu'à
          l'obtention du Kbis.
        </p>
        <button className="launch-button">Créer votre entreprise</button>
      </div>
      <div className="image-section">
        <img 
          src={plans} 
          alt="Team discussing plans" 
          className="team-image" 
        />
      </div>
    </div>
  );
};

export default CompanyLaunch;
