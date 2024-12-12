export class Animal {
  constructor(
    private _nome: string,
    private _tipo: string
  ) {}

  get nome() {
    return this._nome
  }

  get tipo() {
    return this._tipo
  }

  set nome(nome: string) {
    this._nome = nome
  }

  set tipo(tipo: string) {
    this._tipo = tipo
  }

  emitirSom() {
    console.log(`${this._nome} faz um barulho genérico.`)
  }
}