import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import '../styles/pockemonInfo.scss';
import pockemonsStore from '../store/PockemonsStore';
import PockemonTypes from './PockemonTypes';
import PokcemonStat from './PokcemonStat';

const PockemonInfoAdaptive = observer(({onClick}) => {
  const [pockemon, setPockemon] = useState(null);

  useEffect(() => {
    const pockemon = pockemonsStore.pockemonsInfos.filter(pockemon => 
      pockemon.name === pockemonsStore.selectedPockemon.name)[0];
    setPockemon(pockemon);
  }, [pockemonsStore.selectedPockemon])

  return (
    <div className='pockemons__item adaptive' onClick={onClick}>
      <img alt='pockemonInfo img' className='pockemonInfo__img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pockemon?.id}.png`} />
      <div className='pockemonInfo__title'>{pockemon?.name}</div>

      <div className='pockemonInfo__stats'>
        <div className='pockemonInfo__stat'>
          <div className='pockemonInfo__titleStat'>Types:</div>
          <PockemonTypes pockemon={pockemon} />
        </div>
        {pockemon?.stats.map(item =>      
          <PokcemonStat 
            key={item.stat.name} 
            title={item.stat.name.startsWith('special') ? item.stat.name.replace('special-', 'SP ') : item.stat.name}
            value={item.base_stat}
          /> 
        )}
        <PokcemonStat title={'Weight'} value={pockemon?.weight} />
        <PokcemonStat title={'Total moves'} value={pockemon?.moves.length} />
      </div>
    </div> 
  );
});

export default PockemonInfoAdaptive;