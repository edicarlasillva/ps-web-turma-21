// Sem o uso de objetos
// let nomes = []
// let emails = []
// let telefones = []

// nomes.push('Carla')
// emails.push('carla@gmail.com')
// telefones.push('719999999')

// console.log(nomes[0])
// console.log(emails[0])
// console.log(telefones[0])

// const pessoa = {
//   id: 1,
//   primeiroNome: 'Carla',
//   ultimoNome: 'Silva',
//   idade: 36,
//   temFilhos: true,
//   endereco: {
//     rua: 'nome da rua',
//     cidade: 'Salvador'
//   },
//   tecnologias: ['React', 'Javascript'],
// }
// console.log(typeof pessoa)
// // console.log(pessoa)


// console.log(pessoa.id)
// console.log(pessoa.primeiroNome)
// console.log(pessoa.idade)

// const carro = {}

// carro.marca = 'Toyota'
// carro.modelo = 'Corolla'
// carro.ano = 2022
// carro.cor = 'Preto'

// console.log(carro)


// const titulo = 'Roube como um artista'
// const autor = 'Austin Kleon'
// const publicacao = 2015

// const livro = {
//   titulo,
//   autor,
//   publicacao
// }

// console.log(livro)

// // Mesmo sendo declarado como constante, consiguimos 
// // alterar as propriedades
// livro.titulo = 'Mostre seu trabalho'

// console.log(livro)

// // Não consigo alterar a declaração do objeto, quando
// // criado como const. 
// // Assignment to constant variable.
// // livro = 'Siga em frente'

// const pessoa = {
//   id: 1,
//   primeiroNome: 'Carla',
//   ultimoNome: 'Silva',
//   idade: 34,
//   'tem-filhos': true
// }

// const key = 'id'

// // undefined
// console.log(pessoa.key)

// console.log(pessoa[key])
// console.log(pessoa['tem-filhos'])
// console.log(pessoa['ida' + 'de'])

// const livro = {
//   titulo: 'Roube como um artista',
//   autor: 'Austin Kleon',
//   publicacao: 2015
// }

// delete livro.titulo
// console.log(livro)

// // Criar um objeto "Aluno" com as propriedades "nome", "idade" e "curso". 
// const aluno = {
//   nome: 'João',
//   idade: 17,
//   curso: 'Engenharia'
// }

// // 1. Acessar o nome do aluno
// console.log(aluno.nome)
// // 2. Adicionar uma propriedade "nota" ao objeto e atribuir um valor numérico para representar a nota do aluno.
// aluno.nota = 9
// console.log(aluno)
// // 3. Alterar o valor da propriedade "curso" para um novo valor
// aluno.curso = 'Matemática'
// console.log(aluno)
// // 4. Acessar a idade do aluno e verificar se ele é maior ou menor que 18 anos, exibindo uma mensagem adequada no console.
// if (aluno.idade > 18) {
//   console.log('O aluno é maior de 18 anos.')
// } else {
//   console.log('O aluno é menor de 18 anos')
// }

// Passagem por referência
// let ponto1 = {x: 0, y: 0}
// let ponto2 = {x: 0, y: 0}

// console.log(ponto1 === ponto2) // false

// let ponto1 = {x: 0, y: 0}
// let ponto2 = ponto1

// console.log(ponto1 === ponto2) // true

// let ponto1 = {x: 0, y: 0}
// let ponto2 = ponto1

// ponto2.x = 20

// console.log(ponto2.x)
// console.log(ponto1.x)

// Passagem por valor
// let nome = 'Carla'
// let nome2 = nome

// nome2 = 'Marcelo'
// console.log(nome)
// console.log(nome2)

// const livro = {
//   titulo: 'Clean Code',
//   autor: 'Robert C. Martin',
//   paginas: 500,
//   idioma: 'English',
//   estaDisponivel: true
// }

// for (const key in livro) {
//   console.log(key)
// }

// const pessoa = {
//   id: 1,
//   nome: 'Marcelo'
// }

// for (const key in pessoa) {
//   console.log(key)
//   // Traz o valor das propriedades dinamicamente
//   console.log(pessoa[key])
// }


// const livro = {
//   titulo: 'Clean Code',
//   autor: 'Robert C. Martin',
//   paginas: 500,
//   idioma: 'English',
//   estaDisponivel: true
// }

// const livro2 = {}

// for (const key in livro) {
//   livro2[key] = livro[key]
// }

// console.log(livro)
// console.log(livro2)

// console.log(livro === livro2) // false

// const carros = []

// const carro1 = {
//   marca: 'Toyota',
//   modelo: 'Corolla',
//   ano: 2023,
//   cor: 'Preto'
// }

// const carro2 = {
//   marca: 'Honda',
//   modelo: 'Civic',
//   ano: 2021,
//   cor: 'Prata'
// }

// const carro3 = {
//   marca: 'Ford',
//   modelo: 'Fiesta',
//   ano: 2020,
//   cor: 'Branco'
// }

// carros.push(carro1, carro2, carro3)

// console.log(carros)

// // Marca: Toyota, Modelo: Fiesta, Ano: 2020, Cor: Branco
// for (let i = 0; i < carros.length; i++) {
//   console.log(`Marca: ${carros[i].marca}, Modelo: ${carros[i].modelo}, Ano: ${carros[i].ano}, Cor: ${carros[i].cor}`)
// }

// for (const carro of carros) {
//   console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, Cor: ${carro.cor}`)
// }

// const pessoas = []
// const quantidaDePessoas = Number(prompt('Quantas pessoas deseja cadastrar?'))

// for (let i = 0; i < quantidaDePessoas; i++) {
//   const nome = prompt('Digite o nome da pessoa')
//   const idade = prompt('Digite idade da pessoa')
//   const cidade = prompt('Digite cidade da pessoa')

//   pessoas.push({
//     nome,
//     idade,
//     cidade
//   }) 
// }

// console.log(pessoas)

// continuar = confirm('Deseja continuar cadastrando?')

// console.log(continuar)

// const pessoas = []

// let continuar = true

// while (continuar) {
//   const nome = prompt('Digite o nome da pessoa')
//   const idade = prompt('Digite idade da pessoa')
//   const cidade = prompt('Digite cidade da pessoa')

//   pessoas.push({
//     nome,
//     idade,
//     cidade
//   })

//   continuar = confirm('Deseja cadastrar outra pessoa?')
// }

// console.log(pessoas)

