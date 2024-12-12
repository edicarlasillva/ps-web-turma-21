import { TipoPessoa } from "./TipoPessoa"

export class Pessoa extends TipoPessoa {
  constructor(
    protected nome: string, 
    protected sobrenome: string
  ) {
    super()
  }

    nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
}