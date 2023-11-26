// src/components/Dog.js
import React from 'react';

const Dog = ({ dogData }) => {
  return (
    <div className="dog_card">
      <h2>{dogData.name}</h2>
      <p><strong>Gender:</strong> {dogData.gender}</p>
      <p><strong>Breed:</strong> {dogData.breed}</p>
      <p><strong>Age:</strong> {dogData.age}</p>
      <p><strong>Treat:</strong> {dogData.treat}</p>
    </div>
  );
};

export default Dog;
