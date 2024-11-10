import React from 'react'
import { useState, useEffect } from 'react'

const Search = () => {
    const [input, setInput] = useState("");
    const [pokemon, setPokemon] = useState({
        name: "pikachu",
        height: 4,
        weight: 60,
        sprites: {
        front_default:
            "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/25.png",
        },
    });

  return (
    <div className="search">
      <h2>Search for a Pokemon</h2>
      {pokemon && (
        <div id="pokemon-card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height : {pokemon.height}</p>
          <p>Weight : {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Search