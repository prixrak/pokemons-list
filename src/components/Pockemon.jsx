import React, { useEffect, useState } from 'react';
import { fetchPockemonByUrl } from '../http/fetchPockemonByUrl';
import pockemonsStore from '../store/PockemonsStore';
import '../styles/pockemons.scss';
import PockemonTypes from './PockemonTypes';
import Loader from './Loader';

const Pockemon = ({pockemon, onClick}) => {
  // use of hook
  const [pockemonInfo, setPockemonInfo] = useState(null);

  const fetchPockemonHook = async () => {
    let pockemonInfo = null;
    if(pockemonsStore.pockemonsInfos.some(pock => pock.name === pockemon.name))
      pockemonInfo = pockemonsStore.pockemonsInfos.filter(pock => pock.name === pockemon.name)[0];
    else {
      pockemonInfo = await fetchPockemonByUrl(pockemon.url);
      pockemonsStore.setPockemonsInfos([...pockemonsStore.pockemonsInfos, pockemonInfo]);
      console.log("fetch")
    }
    setPockemonInfo(pockemonInfo);
  };

  useEffect(() => {
    fetchPockemonHook();
  }, []);

  return (
    <div className='pockemons__item' onClick={onClick}>
      {pockemonInfo?.id 
        ? <img alt='pokemon img' className='pockemons__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pockemonInfo?.id}.png`} />
        : <Loader />}
      <div className='pockemons__title'>{pockemon.name}</div>
      <PockemonTypes pockemon={pockemonInfo} />
    </div>
  );
};

export default Pockemon;