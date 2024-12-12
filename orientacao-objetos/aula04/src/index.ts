interface Animal {
  nome: string,
  emitirSom(): void
}

class Cachorro implements Animal {
  constructor(
    public nome: string
  ) {}

  emitirSom() {
    console.log(`${this.nome} fez Au au!`)
  }
}

const meuCachorro = new Cachorro('Totó')
meuCachorro.emitirSom()