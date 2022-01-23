import { makeAutoObservable } from 'mobx';

class PockemonsStore {
  pockemons = [];
  selectedPockemon = null;
  pockemonInfoElement = null;
  offset = 0;
  limit = 12;
  pockemonsInfos = [];

  constructor() {
    makeAutoObservable(this);
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