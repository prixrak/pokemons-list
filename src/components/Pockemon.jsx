import React, { useEffect, useState } from 'react';
import { fetchPockemonByUrl } from '../http/fetchPockemonByUrl';
import pockemonsStore from '../store/PockemonsStore';
import '../styles/pockemons.scss';
import PockemonTypes from './PockemonTypes';
import Loader from './Loader';
import PockemonInfo from './PockemonInfo';
import { observer } from 'mobx-react-lite';
import PockemonInfoAdaptive from './PockemonInfoAdaptive';
import { WINDOW_ARAPTIVE } from '../utils/const';

const Pockemon = observer(({pockemon, onClick}) => {
  const [pockemonInfo, setPockemonInfo] = useState(null);
  const [active, setActive] = useState(false); // show pockemon info if size of window less than WINDOW_ARAPTIVE
                                                            // and when pockemon card clicked


  const fetchPockemonHook = async () => {
    let pockemonInfo = null;
    if(pockemonsStore.pockemonsInfos.some(pock => pock.name === pockemon.name))
      pockemonInfo = pockemonsStore.pockemonsInfos.filter(pock => pock.name === pockemon.name)[0];
    else {
      pockemonInfo = await fetchPockemonByUrl(pockemon.url);
      pockemonsStore.setPockemonsInfos([...pockemonsStore.pockemonsInfos, pockemonInfo]);
    }
    setPockemonInfo(pockemonInfo);
  };

  useEffect(() => {
    fetchPockemonHook();
  }, []);

  if(pockemon?.name === pockemonsStore?.selectedPockemon?.name && active && pockemonsStore.winSize < WINDOW_ARAPTIVE) {
    return <PockemonInfoAdaptive onClick={() => { 
      setActive(false);
      pockemonsStore.setSelectedPockemon(null)
    }}/>;
  }

  return (
    <div className='pockemons__item' onClick={(e) => {
      if(pockemonsStore.selectedPockemon && pockemonsStore?.selectedPockemon?.name === pockemon.name) {
        pockemonsStore.setSelectedPockemon(null);
        return;
      }
      pockemonsStore.setSelectedPockemon(pockemon);
      setActive(true);
    }}>
      {pockemonInfo?.id 
        ? <img alt='pokemon img' className='pockemons__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pockemonInfo?.id}.png`} />
        : <Loader />}
      <div className='pockemons__title'>{pockemon.name}</div>
      <PockemonTypes pockemon={pockemonInfo} />
    </div>
  );
});

export default Pockemon;