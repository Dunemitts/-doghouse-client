// src/components/DogList.js
import React from 'react';
import Dog from './Dog';

const DogList = ({dogs}) => {
  return (
    <div className='dog-list'>
      {dogs.map((dog, index) => (
        <Dog key={index} dogData={dog} />
      ))}
    </div>
  );
};

export default DogList;
