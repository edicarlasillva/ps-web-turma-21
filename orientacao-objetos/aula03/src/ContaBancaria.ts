class ContaBancaria {
  constructor(private _valor: number) {}

  get valor(): number {
    return this._valor
  }

  set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor
    } else {
      console.log('O valor não pode ser menor do que 0.')
    }
  }
}

const conta = new ContaBancaria(10)
// console.log(conta.valor)

conta.valor = 20

console.log(conta.valor)

conta.valor = -5