import React from 'react'
import { useState, useEffect } from 'react'

const Search = () => {
    const [input, setInput] = useState("");
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async () => {
        const response = await fetch(
          `https://pokedex.mimo.dev/api/pokemon/${input.toLowerCase()}`
        );
        const data = await response.json();
        setPokemon(data);
      };

  return (
    <div className="search">
      <h2>Search for a Pokemon</h2>
      <div className="search-box">
        <input
          type="text"
          value={input}
          placeholder="Enter Pokemon name..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>
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