import { makeAutoObservable } from 'mobx';

class PockemonsStore {
  pockemons = [];
  selectedPockemon = null;
  offset = 0;
  limit = 12;
  pockemonsInfos = [];
  selectedType = null;
  filteredPockemons = [];
  winSize = null;

  constructor() {
    makeAutoObservable(this);
  }

  setWinSize(size) {
    this.winSize = size;
  }
  
  setFilteredPockemons(pockemons) {
    this.filteredPockemons = pockemons;
  }

  setSelectedType(type) {
    this.selectedType = type;
  }

  setOffset(offset) {
    this.offset = offset;
  }

  setPockemonsInfos(pockemons) {
    this.pockemonsInfos = pockemons;
  }

  setPockemonInfoElement(element) {
    this.pockemonInfoElement = element;
  }

  setPockemons(pockemons) {
    this.pockemons = pockemons;
  }

  setSelectedPockemon(selectedPockemon) {
    this.selectedPockemon = selectedPockemon;
  }
}

export default new PockemonsStore();