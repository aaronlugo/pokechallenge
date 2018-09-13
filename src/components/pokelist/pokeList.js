import React from 'react';
import './pokeList.css';
import { pokemons } from '../../pokeData';

// Import components
import PokeCell from '../pokecell/pokeCell.js';


const PokeList = ({ handleOnClick }) => {
  const cells = pokemons.map(pokeClass => {
    return (
      <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}


export default PokeList;