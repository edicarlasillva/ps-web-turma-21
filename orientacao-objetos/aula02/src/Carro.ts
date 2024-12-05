export class Carro {
  marca: string = 'Sem marca'
  modelo: string = 'Sem modelo'
  ano: number = 0

  exibirInfos(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
  }
}