import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [poke, setPoke] = useState({});

  const getPoke = async () => {
    try {
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const parsed = await poke.json();
      console.log(parsed);
      setPoke(parsed);
    } catch (err) {
      console.log(err);
    }
  };

  const record = () => {
    console.log(name);
  };

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={getPoke}>record!</button>
    </div>
  );
};

export default App;
