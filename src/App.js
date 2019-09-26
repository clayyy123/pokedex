import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import List from './Components/PokemonList';

const Container = styled.div`
  border: 0.1rem solid black;
  height: 50rem;
  width: 40rem;
  border-radius: 4rem;
`;

const App = () => {
  const [name, setName] = useState('');
  const [poke, setPoke] = useState({});
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const getPoke = async p => {
    try {
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`);
      const parsed = await poke.json();
      setPoke(parsed);
    } catch (err) {
      console.log(err);
    }
  };

  const getPokemons = async () => {
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${page * 10}&limit=10`
      );
      const parsed = await pokemon.json();
      setPokemons(parsed.results);
    } catch (err) {
      console.log(err);
    }
  };

  const prevPage = async () => {
    setPage(page - 1);
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 10}&limit=10`
      );
      const parsed = await pokemon.json();
      setPokemons(parsed.results);
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = async () => {
    setPage(page + 1);
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${(page + 1) * 10}&limit=10`
      );
      const parsed = await pokemon.json();
      setPokemons(parsed.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={() => getPoke(name)}>record!</button>
      <button onClick={getPokemons}>view pokemon</button>
      <button onClick={nextPage}>next</button>
      <button onClick={prevPage}>back</button>
      <Container>
        <List pokemons={pokemons} getPoke={getPoke} />
      </Container>
    </div>
  );
};

export default App;
