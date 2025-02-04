import React from 'react';

const CharacterCard = ({ name, role, image }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default CharacterCard;