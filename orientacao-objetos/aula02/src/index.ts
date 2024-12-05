import { Carro } from './Carro'
import { Livro } from './Livro'
import { Pessoa } from './Pessoa'
import { Produto } from './Produto'
import { Usuario } from './Usuario'

// const usuario1 = new Usuario()
// const usuario2 = new Usuario()


// usuario1.nome = 'Carla'
// usuario1.idade = 36
// console.log(usuario1)

// usuario2.nome = 'José'
// usuario2.idade = 45
// console.log(usuario2)

// usuario1.saudacao()
// usuario2.saudacao()

// const livro1 = new Livro()
// const livro2 = new Livro()

// livro1.titulo = 'Roube como um artista'
// livro1.autor = 'Austin Kleon'
// livro1.anoPublicacao = 2012

// livro1.mostrarDetalhes()

// console.log(livro1, livro2)

// const usuario = new Usuario()
// usuario.nome = 'Alice'
// usuario.idade = 25

// console.log(usuario.obterNome())

// usuario.atualizarNome('Juliana')
// console.log(usuario.obterNome())

// usuario.saudacao()

// const carro = new Carro()
// carro.marca = 'Toyota'
// carro.modelo = 'Corolla'
// carro.ano = 2020

// console.log(carro.exibirInfos())

// const pessoa = new Pessoa('Carla', 36)
// console.log(pessoa)
// pessoa.dizerOla()

// const produto1 = new Produto('Geladeira', 3500)
// produto1.mostrarDetalhes()
// console.log(produto1)


// const usuario = new Usuario('Carla', 36, 'carla@gmail.com')
// usuario.mostrarInfos()

const produto = new Produto('Notebook', 3000)
produto.mostrarPrecoComDesconto()

const produto2 = new Produto('Celular', 1500, 10)
produto2.mostrarPrecoComDesconto()