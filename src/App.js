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

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    getDog(breedId)
    .then((newDog) =>{
      setDog(newDog);

    })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} />
    </div>
  );
}

export default App;
