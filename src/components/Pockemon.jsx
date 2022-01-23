import React, { useEffect, useState } from 'react';
import { fetchPockemonByUrl } from '../http/fetchPockemonByUrl';
import pockemonsStore from '../store/PockemonsStore';
import '../styles/pockemons.scss';
import PockemonTypes from './PockemonTypes';

const Pockemon = ({pockemon, onClick}) => {
  // use of hook
  const [pockemonInfo, setPockemonInfo] = useState(null);

  const fetchPockemonHook = async () => {
    const pockemonInfo = await fetchPockemonByUrl(pockemon.url);
    setPockemonInfo(pockemonInfo);
    // set pockemons detail info in store to filter
    pockemonsStore.setPockemonsInfos([...pockemonsStore.pockemonsInfos, pockemonInfo]);
  };

  useEffect(() => {
    fetchPockemonHook();
  }, []);

  return (
    <div className='pockemons__item' onClick={onClick}>
      <img alt='pokemon img' className='pockemons__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pockemonInfo?.id}.png`} />
      <div className='pockemons__title'>{pockemon.name}</div>
      <PockemonTypes pockemon={pockemonInfo} />
    </div>
  );
};

export default Pockemon;