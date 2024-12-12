export class Lutador {
  constructor(
    public nome: string,
    public peso: number
  ) {}

  apresentar() {
    console.log(`Lutador: ${this.nome}, Peso: ${this.peso}`)
  }
}