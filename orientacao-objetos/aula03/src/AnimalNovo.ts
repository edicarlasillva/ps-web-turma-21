export abstract class Animal {
  constructor(protected nome: string) {}
  
  abstract produzirSom(): void
} 

export class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome)
  }

  produzirSom(): void {
    console.log('Au, au!')
  }
}

export class Gato extends Animal {
  constructor(nome: string) {
    super(nome)
  }

  produzirSom(): void {
    console.log('Miau!')
  }
}



