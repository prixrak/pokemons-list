import React, { useEffect, useState } from 'react';
import PockemonList from '../components/PockemonList';
import { fetchPockemons } from './../http/fetchPockemons';
import { useFetching } from './../hooks/useFetching';
import '../styles/app.scss';
import '../styles/pockemon.scss';

import Button from './../components/UI/Button';

const Pockemons = () => {
  const [pockemons, setPockemons] = useState([]);

  // use of hook
  const [fetchPockemonsHook, isFetching, isFetchingError] = useFetching(async () => {
    const pockemons = await fetchPockemons();
    setPockemons(pockemons);
  });

  useEffect( () => {
    fetchPockemonsHook();
  }, []);

  if(isFetching) {
    return <div>Loading</div>
  }

  return (
    <div className='container'>
      <div className='pockemons'>
        { pockemons.length !== 0 && 
            <>
              <PockemonList pockemons={pockemons} />
            </>
        }
      </div>
    </div>
  );
};

export default Pockemons;