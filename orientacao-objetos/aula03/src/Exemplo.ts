class Exemplo {
  constructor(
    public variavelPublica: string, 
    private variavelPrivada: number
  ) {}

  mostrarDetalhes() {
    console.log(`Variável Pública: ${this.variavelPublica}`)
    console.log(`Variável Privada: ${this.variavelPrivada}`)
  }
}

const instancia = new Exemplo('Olá', 30)

console.log(instancia.variavelPublica)
console.log(instancia.variavelPrivada)

instancia.mostrarDetalhes()
