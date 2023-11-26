// src/App.js
import React, { useEffect, useState } from 'react';
import DogList from './DogList';
import axios from 'axios'
import './App.css'

function App() {
  const [dogs, setDogs] = useState([]);
  useEffect (()=>{
    const loadDogList=async()=>{
      try{
        const response=await axios.get(`https://cit-doghouse-api.uc.r.appspot.com/api/v1/dogs/limit/10`)
        console.log(response.data)
        setDogs(()=>[...response.data])
      }
      catch(error){
        console.log('Error!', error)
      }
    }
    loadDogList()
  }, [])

  return (
    <div className="container">
      <h1>Dog List</h1>
      <DogList dogs={dogs} />
      
    </div>
  );
}

export default App;
