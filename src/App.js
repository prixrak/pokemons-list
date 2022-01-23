import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Pockemons from './pages/Pockemons';
import './styles/app.scss';
import { observer } from 'mobx-react-lite';
import PockemonInfo from './components/PockemonInfo';
import pockemonsStore from './store/PockemonsStore';
import { WINDOW_ARAPTIVE } from './utils/const';

const App = observer(() => {
  useEffect(() => {
    pockemonsStore.setWinSize(window.innerWidth);
    window.addEventListener('resize', () => pockemonsStore.setWinSize(window.innerWidth));
  });
  return (
    <div className='app'>
      <TopBar />
      {pockemonsStore.selectedPockemon !== null && pockemonsStore.winSize > WINDOW_ARAPTIVE &&
        <PockemonInfo /> }
      <div className='container'>
        <Pockemons />
      </div>
    </div>
  );
});

export default App;
