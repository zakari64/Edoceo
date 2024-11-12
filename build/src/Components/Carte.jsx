import React from 'react';
import '../styles/carte.css';
import phone from '../assets/images/phonefix.webp';
import estetic from '../assets/images/estetic.webp';
import hotel from '../assets/images/hotel.webp'

const Card = ({ image, title, description }) => (
  <div className="card">
    <div className="card-image-wrapper">
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const CardContainer = () => {
  const cards = [
    {
      image: phone,
      title: 'Réparation Mobiles',
      description: 'A stunning sunset over the mountains.',
    },
    {
      image: estetic,
      title: 'Esthétique',
      description: 'A vibrant cityscape with skyscrapers lighting up the night sky.',
    },
    {
      image: hotel,
      title: 'Hôtelerie',
      description: 'A peaceful path through a lush green forest.',
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardContainer;
