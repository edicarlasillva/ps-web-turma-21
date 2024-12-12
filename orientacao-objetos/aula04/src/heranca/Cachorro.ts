import { Animal } from "./Animal"

export class Cachorro extends Animal {
  constructor(
    nome: string, 
    private _raca: string
  ) {
    super(nome, 'Cachorro')
  }

  get raca() {
    return this._raca
  }

  latir() {
    console.log(`${this.nome} - ${this._raca} está latindo: Au au!`)
  }
}