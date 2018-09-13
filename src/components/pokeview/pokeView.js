import React from 'react';
import './pokeView.css';

const PokeView = ({ pokemon }) => {    
    const { id, name, sprite, type, stats } = pokemon;
    const statistics = stats && stats.map((stat, index) => {
        return (
            <p key={index} className="data-char">{stat.stat.name}: {stat.base_stat}</p>
        );
    });

  return (
    <section className="detail-view">
    <span className="dot"></span>
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'> {name}</h1>
        <p className="data-char">ID: {id}</p>
        <p className="data-char">Type: {type}</p>
        {statistics}
      </div>
    </section>
  )
}

export default PokeView