import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  border: 0.1rem solid black;
  height: 50rem;
  width: 40rem;
  border-radius: 4rem;
`;

const App = () => {
  const [name, setName] = useState('');
  const [poke, setPoke] = useState({});
  const [page, setPage] = useState({ offset: 0, limit: 10 });
  const [pokemons, setPokemons] = useState([]);

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

  const getPokemons = async () => {
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${page.offset}&limit=${page.limit}`
      );
      const parsed = await pokemon.json();
      setPokemons(parsed.results);
    } catch (err) {
      console.log(err);
    }
  };

  const prevPage = () => {
    try {
    } catch (err) {}
  };

  const nextPage = () => {
    const newP = { offset: page.offset + 10, limit: page.limit + 10 };
    setPage(newP);
  };

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={getPoke}>record!</button>
      <button onClick={getPokemons}>view pokemon</button>
      <Container>
        {pokemons.map((p, i) => {
          return <div>{p.name}</div>;
        })}
      </Container>
    </div>
  );
};

export default App;
