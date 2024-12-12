export class Aluno {
  constructor(
    public nome: string,
    public idade: number
  ) {}

  apresentar() {
    console.log(`Aluno ${this.nome}, idade: ${this.idade}.`)
  }
}