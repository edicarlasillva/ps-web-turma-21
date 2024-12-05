export class Pessoa {
  nome: string = 'Sem nome'
  idade: number = 0

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  dizerOla() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
  }
}