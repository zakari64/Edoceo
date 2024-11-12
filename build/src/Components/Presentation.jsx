import React from "react";
import "../styles/presentation.css";
import plans from "../assets/images/plans.webp";

const CompanyLaunch = () => {
  return (
    <div className="company-launch-container">
      <div className="text-section">
        <h1>
          L'Excellence pédagogique
          <br />
          simplement.
        </h1>
        <p>
          Le Centre de Formation Edoceo se distingue par son expertise dans des
          formations variées, adaptées aux besoins actuels du marché. Nos
          programmes couvrent des domaines tels que l'hôtelerie, l'aeroportuaire
          et le management sont animés par des formateurs qualifiés, permettant
          à chacun de développer des compétences solides pour réussir
          professionnellement.
        </p>
        <a href="#" className="button">
          Contact
        </a>
      </div>
      <div className="image-section">
        <img src={plans} alt="Team discussing plans" className="team-image" />
      </div>
    </div>
  );
};

export default CompanyLaunch;
