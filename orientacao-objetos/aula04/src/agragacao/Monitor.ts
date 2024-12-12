export class Monitor {
  constructor(
    public nome: string
  ) {}

  supervisionar() {
    console.log(`${this.nome} está supervisionando a turma.`)
  }
}