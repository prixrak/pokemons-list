import React, { useEffect, useState } from 'react';
import { fetchPockemonByUrl } from '../http/fetchPockemonByUrl';
import '../styles/pockemon.scss';

const Pockemon = ({pockemon}) => {
  // use of hook
  const [pockemonInfo, setPockemonInfo] = useState(null);

  const fetchPockemonHook = async () => {
    const pockemonInfo = await fetchPockemonByUrl(pockemon.url);
    setPockemonInfo(pockemonInfo);
  };

  useEffect(() => {
    fetchPockemonHook();
  }, []);

  return (
    <div className='pockemons__item'>
      <div>{pockemon.name}</div>
      <div>{pockemon.url}</div>
    </div>
  );
};

export default Pockemon;