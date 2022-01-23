import React, { useEffect, useRef } from 'react';
import PockemonList from '../components/PockemonList';
import { fetchPockemons } from './../http/fetchPockemons';
import { useFetching } from './../hooks/useFetching';
import '../styles/pockemons.scss';
import { observer } from 'mobx-react-lite';
import pockemonsStore from '../store/PockemonsStore';
import Loader from './../components/Loader';
const Pockemons = observer(() => {

  const pockemonsRef = useRef(null);
  // use of hook
  const [fetchPockemonsHook, isFetching, isFetchingError] = useFetching(async () => {
    const pockemons = await fetchPockemons();
    pockemonsStore.setPockemons(pockemons);
  });

  useEffect( () => {
    fetchPockemonsHook();
  }, []);

  useEffect( () => {
    pockemonsStore.setFilteredPockemons(pockemonsStore.pockemons);
    console.log("ya")
  }, [pockemonsStore.pockemons]);

  if(isFetching) {
    return <Loader />
  }

  return (
    <>
      <div ref={pockemonsRef} className='pockemons'>
        { pockemonsStore.filteredPockemons.length !== 0 && 
          <PockemonList pockemons={pockemonsStore.filteredPockemons} />
        }
      </div>
    </>
  );
});

export default Pockemons;