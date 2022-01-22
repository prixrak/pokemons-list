import React from 'react';
import Pockemon from './Pockemon';
import '../styles/pockemon.scss';
import Button from './UI/Button';

const PockemonList = ({pockemons}) => {
  return (
    <div className='pockemons__list'>
      {pockemons.map(pockemon =>
        <Pockemon key={pockemon.name} pockemon={pockemon} />
      )}
      <Button className='pockemons__btn'>Load more</Button>
    </div>
  );
};

export default PockemonList;