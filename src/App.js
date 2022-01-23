import React from 'react';
import TopBar from './components/TopBar';
import Pockemons from './pages/Pockemons';
import './styles/app.scss';
import { observer } from 'mobx-react-lite';
import PockemonInfo from './components/PockemonInfo';
import pockemonsStore from './store/PockemonsStore';
const App = observer(() => {
  

  return (
    <div className='app'>
      <TopBar />
      {pockemonsStore.selectedPockemon !== null &&
        <PockemonInfo /> }
      <div className='container'>
        <Pockemons />
      </div>
    </div>
  );
});

export default App;
