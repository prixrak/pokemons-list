import React from 'react';
import pockemonsStore from '../store/PockemonsStore';
import '../styles/pockemonInfo.scss';

const PockemonTypes = ({pockemon, props}) => {
  const filter = (e) => {
    e.stopPropagation();
    // pockemonsStore.setPockemons(pockemonsStore.pockemons.filter)
  }
  return (
    <ul className='pockemonInfo__types' {...props}>
      {pockemon?.types.map(item => <li className='pockemonInfo__type' key={item.type.name} onClick={filter}>{item.type.name}</li>)}
    </ul>
  );
};

export default PockemonTypes;