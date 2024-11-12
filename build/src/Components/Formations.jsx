import React from "react";
import "../styles/formations.css";
import photo from "../assets/icons/blue.png";
import Navbar from "./Navbar";
import Footer from './Footer'
import cardImage1 from "../assets/icons/staffhotel.jpg";
import cardImage2 from "../assets/icons/airport.jpg";
import cardImage3 from "../assets/icons/resto.png";
import cardImage4 from "../assets/icons/fishing.jpg";
import cardImage5 from "../assets/icons/management.png";
import cardImage6 from "../assets/icons/ai.png";

function Formations() {
  const trainings = [
    {
      id: 1,
      title:
        "Excellence en Service : Formation pour le Personnel Aéroportuaire",
      description:
        "Formation pratique pour offrir un service aéroportuaire d'excellence et satisfaire chaque passager",
      badge: "IRVE",
      image: cardImage2,
    },
    {
      id: 2,
      title:
        "Excellence en Service : Formation pour le Personnel de Restauration",
      description:
        "Formation pratique pour offrir un service en restauration d'excellence et satisfaire chaque client",
      badge: "IRVE",
      image: cardImage3,
    },
    {
      id: 3,
      title:
        "Excellence en Service : Formation pour le Personnel de Pêche",
      description:
        "Formation pratique pour offrir un service en pêche d'excellence et satisfaire chaque client",
      badge: "IRVE",
      image: cardImage4,
    },
    {
      id: 4,
      title:
        "Excellence en Leadership : Formation pour les Managers",
      description:
        "Formation pratique pour développer un management d'excellence et inspirer chaque membre de l’équipe.",
      badge: "IRVE",
      image: cardImage5,
    },
    {
      id: 5,
      title:
        "Excellence en Leadership : Formation pour les hôteliers",
      description:
        "Formation pratique pour offrir un service hôtelier d'excellence et satisfaire chaque client",
      badge: "IRVE",
      image: cardImage1,
    },
    {
      id: 6,
      title:
        "Excellence en Stratégie : Formation en Marketing et Intelligence Artificielle",
      description:
        "Formation pratique pour maîtriser le marketing assisté par IA et offrir des stratégies innovantes et efficaces",
      badge: "IRVE",
      image: cardImage6,
    },
  ];
  return (
    <div className="formaWrapper">
      <Navbar />
      <div className="page-container">
        <div className="text-section">
          <div className="title">Nos formations</div>
          <p>
            Toutes nos formations sont agréées par Qualit’Enr et vous permettent
            par la suite de devenir installateurs de bornes IRVE.
          </p>
        </div>
        <div className="image-section">
          <div className="circular-image">
            <img src={photo} alt="Formation" />
          </div>
        </div>
      </div>
      <div className="title-section">
        Nos formations dans différent domaines
      </div>
      <div className="trainings-container">
        {trainings.map((training) => (
          <div key={training.id} className="training-card">
            <img
              src={training.image}
              alt={training.title}
              className="training-image"
            />
            <div className="training-content">
              <p className="training-badge">{training.badge}</p>
              <h2 className="training-title">{training.title}</h2>
              <p className="training-description">{training.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Formations;
