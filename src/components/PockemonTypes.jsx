import React from 'react';
import pockemonsStore from '../store/PockemonsStore';
import '../styles/pockemonInfo.scss';
import { observer } from 'mobx-react-lite';

const PockemonTypes = observer(({pockemon, props}) => {

  const filter = (e, typeName) => {
    e.stopPropagation();
    if(pockemonsStore.selectedType &&  pockemonsStore.selectedType === typeName) {
      pockemonsStore.setFilteredPockemons(pockemonsStore.pockemons); // get back pockemons when double click
      pockemonsStore.setSelectedType(null);
      return;
    }
    pockemonsStore.setSelectedType(typeName);
    pockemonsStore.setFilteredPockemons(pockemonsStore.pockemonsInfos.filter(pock =>
      pock.types.some(item => item.type.name === typeName)));
  }

  return (
    <ul className='pockemonInfo__types' {...props}>
      {pockemon?.types.map(item => <li className='pockemonInfo__type' key={item.type.name} onClick={(e) => filter(e, item.type.name)}>{item.type.name}</li>)}
    </ul>
  );
});

export default PockemonTypes;