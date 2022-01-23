import React, { useState } from 'react';
import Pockemon from './Pockemon';
import '../styles/pockemons.scss';
import Button from './UI/Button';
import pockemonsStore from '../store/PockemonsStore';
import { observer } from 'mobx-react-lite';
import { fetchPockemons } from './../http/fetchPockemons';

const PockemonList = observer(({pockemons}) => {
  const loadMore = async () => {
    pockemonsStore.setOffset(pockemonsStore.offset + pockemonsStore.limit);
    const pockemons = await fetchPockemons(pockemonsStore.offset);
    pockemonsStore.setPockemons([...pockemonsStore.pockemons, ...pockemons]);
  }

  return (
    <div className='pockemons__list'>
      {pockemons.map(pockemon => 
        <Pockemon  key={pockemon.name} pockemon={pockemon} />
      )}
      <Button className='pockemons__btn' onClick={loadMore}>Load more</Button>
    </div>
  );
});

export default PockemonList;