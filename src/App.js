import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';

const initialDog = {
  image: "",
  breed: {
    id: "",
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setloading(true)
    getDog(breedId)
    .then((newDog) =>{
      setDog(newDog);
      setloading(false)

    })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
