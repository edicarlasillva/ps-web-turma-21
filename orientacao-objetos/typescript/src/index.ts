// // console.log('Olá, mundo! Usando Typescript e Node.js')

// // let indefinido: undefined = undefined

// // let nulo: null = null

// // let pessoa: {
// //   nome: string,
// //   idade: number
// //   conhecimento: string[]
// // } = {
// //   nome: 'Carla',
// //   idade: 36,
// //   conhecimento: ['Typescript', 'CSS', 'React']
// // }

// // function exemplo(condicao: boolean): number | string {
// //   if (condicao) {
// //     return 40
// //   } else {
// //     return 'Carla'
// //   }
// // }

// // const resultadoNumero = exemplo(false)

// // console.log(resultadoNumero)

// // let numeros: number[] = [10, 20, 30]

// // let dobro = numeros.map((item: number) => item * 2)

// // console.log(dobro)

// // type union
// type Categorias = 'design' | 'codigo' | 'sem codigo'

// function pintarCategoria(categoria: Categorias) {
//   if (categoria === 'design') {
//     console.log('Pinte de vermelho')
//   } else if (categoria === 'codigo') {
//     console.log('Pinte de verde')
//   } else if (categoria === 'sem codigo') {
//     console.log('Pinte de roxo')
//   }
// }

// // pintarCategoria('sem codigo')

// // type Produto = {
// //   nome: string
// //   preco: number
// //   teclado: boolean
// //   // calcularDesconto: (desconto: number) => void
// // }

// interface Pessoa {
//   nome?: string
//   idade: number
//   // apresentar: (nome: string) => string
// }

// const pessoas: Pessoa[] = [
//   {nome: 'Alice', idade: 25},
//   {nome: 'José', idade: 30},
//   {nome: 'Maria', idade: 39},
//   {idade: 36}
// ]

// const maioresDe30 = pessoas.filter((pessoa: Pessoa) => pessoa.idade >= 30)

// console.log(maioresDe30)

// interface Empresa {
//   nome: string
//   anoFundacao: number
//   pais: string
// }

// interface Produto {
//   nome: string
//   preco: number
//   descricao: string
//   garantia: string, 
//   empresaFabricante: Empresa,
//   empresaMontadora: Empresa
// }

// type Produto = {
//   preco: number
// }

// type Carro = {
//   rodas: number
//   portas: number
// }

// function handleProdutoCarro(dados: Carro & Produto) {
//   console.log('Preço:', dados.preco)
//   console.log('Rodas:', dados.rodas)
//   console.log('Portas:', dados.portas)
// }

// handleProdutoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 4
// })

// type Endereco = {endereco: string}
// type Telefone = {telefone: string}

// type InformacoesContato = Endereco | Telefone

// interface Usuario {
//   nome: string
// }

// interface Telefone {
//   telefone: string
// }

// interface UsuarioCompleto extends Usuario, Telefone { 
//   email: string
// }

import { Pessoa, Telefone } from './tipos'

const pessoa: Pessoa = {
  nome: 'Alice',
  idade: 25
}

const contato: Telefone = {
  telefone: '71982255454'
}