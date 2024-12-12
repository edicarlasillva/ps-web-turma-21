import { Lutador } from "./Lutador"

export class Luta {
  private desafiado: Lutador
  private desafiador: Lutador

  constructor(
    nomeDesafiado: string,
    pesoDesafiado: number,
    nomeDesafiador: string,
    pesoDesafiador: number
  ) {
    this.desafiado = new Lutador(nomeDesafiado, pesoDesafiado)
    this.desafiador = new Lutador(nomeDesafiador, pesoDesafiador)
  }

  iniciarLuta() {
    console.log('=== Início da luta ===')
    this.desafiado.apresentar()
    this.desafiador.apresentar()
  }
}