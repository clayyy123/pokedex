import React from 'react';

const List = ({ pokemons, getPoke }) => {
  return (
    <div>
      {pokemons.map((p, i) => {
        return (
          <div key={i} onClick={() => getPoke(p.name)}>
            {p.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
