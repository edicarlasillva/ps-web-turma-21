// function saudacao() {
//   console.log('Olá! Sejá bem-vindo!')
// }

// // executar a função
// saudacao()

// function bemVindo(nome = 'Marcelo') {
//   console.log(`Olá, ${nome}! Seja bem-vindo!`)
// }

// bemVindo('Jéssica')
// // Function Declaration
// function somarNumeros(a, b) {
//   return a + b
// }

// const resultado = somarNumeros(2, 4)

// console.log(resultado)

// // Function Expression
// const somarNumeros = function(a, b) {
//   return a + b
// }

// function calcularIdade(anoNascimento, anoAtual) {
//   return anoAtual - anoNascimento
// }

// console.log(calcularIdade(1988, 2024))

// function calcularMedia(nota1, nota2) {
//   const media = (nota1 + nota2) / 2

//   console.log(`Sua média é: ${media.toFixed(2)}`)

//   return media
// }

// const resultado = calcularMedia(9.8, 9.5)

// console.log(resultado)


// const nome = prompt('Qual o seu nome')

// console.log(nome)

// const numero = 42

// console.log('O número é', numero)

// document.write('Hello')

// const nomeDeUsuario = 'user123'

// function saudarUsuario() {
//   console.log(`Olá, ${nomeDeUsuario}`)
// }

// saudarUsuario()

// function calcularTaxa(renda) {
//   const taxaImposto = 0.2 // escopo local

//   return renda * taxaImposto
// }

// const minhaRenda = 5000
// const valorImposto = calcularTaxa(minhaRenda)

// console.log(valorImposto) // 1000
// console.log(taxaImposto) // taxaImposto is not defined

// function calcularArea(raio) {
//   const pi = Math.PI // escopo local

//   // const area = pi * raio * raio
//   const area = pi * Math.pow(raio, 2)
//   // const area = pi * raio ** 2

//   return area
// }

// const raioCirculo = 5
// const areaCalculada = calcularArea(raioCirculo)

// console.log(areaCalculada.toFixed(2)) // 78.54
// console.log(pi) // pi is not defined

// const numeros = [1, 2, 3, 4, 5]

// numeros.forEach(function(numero) {
//   console.log(numero * 3)
// })

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']

// frutas.forEach(function(fruta) {
//   console.log(`Eu gosto de ${fruta}`)
// })

// const cores = ['Vermelho', 'Verde', 'Azul']

// cores.forEach(function(cor, indice, array) {
//   console.log(`Índice: ${indice}, Cor: ${cor}`)
//   console.log(array)
// })

// const idades = [18, 25, 30, 16, 22]

// const maioresDeIdade = idades.filter(function(idade) {
//   return idade > 18
// })

// console.log(maioresDeIdade)

// const frameworks = [
//   {
//     name: 'Angular.js',
//     contributors: 5000
//   }, 
//   {
//     name: 'React',
//     contributors: 7000
//   },
//   {
//     name: 'Vue.js',
//     contributors: 200
//   }
// ]

// const resultado = frameworks.filter(function(framework) {
//   return framework.contributors > 200
// })

// console.log(resultado)

// const numeros = [10, 20, 30, 40, 50]

// const numeroMaiorQue25 = numeros.find(function(numero) {
//   return numero > 25
// })

// console.log(numeroMaiorQue25)

// const frutas = ['Maçã','Banana', 'Uva', 'Laranja', 'Banana']

// const indiceFruta = frutas.findIndex(function(fruta) {
//   return fruta === 'Banana'
// })

// console.log(indiceFruta)

// const numeros = [1, 2, 3, 4, 5]

// const numerosDobrados = numeros.map(function(numero) {
//   return numero * 2
// })

// console.log(numerosDobrados)

// const pessoas = [
//   { nome: "João", sexo: "M", salario: 2500 },
//   { nome: "Maria", sexo: "F", salario: 3200 },
//   { nome: "Pedro", sexo: "M", salario: 2000 },
//   { nome: "Ana", sexo: "F", salario: 2800 },
//   { nome: "Carlos", sexo: "M", salario: 3500 }
// ];

// // Usar forEach para exibir os nomes
// pessoas.forEach(function(pessoa) {
//   console.log(pessoa.nome)
// })
// // Usar findIndex para encontrar índice do primeiro homem
// // Se não encontrar nenhum elemento retorna -1
// const indicePrimeiroHomem = pessoas.findIndex(function(pessoa) {
//   return pessoa.sexo === 'M'
// })

// console.log(indicePrimeiroHomem)
// // Usar o find para encontrar a primeira mulher
// const primeiraMulher = pessoas.find(function(pessoa) {
//   return pessoa.sexo === 'F'
// })

// console.log(primeiraMulher)
// // Usar o filter para encontrar pessoas com salário maior que 2500
// const maioresSalarios = pessoas.filter(function(pessoa) {
//   return pessoa.salario > 2500
// })

// console.log(maioresSalarios)

let biblioteca = []

function criarLivro(titulo, autor, numPaginas, lido) {
  return {
    titulo,
    autor,
    numPaginas,
    lido
  }
}

// Cria os livros
const livro1 = criarLivro('Roube como um artista', 'Austin Kleon', 200, false)
const livro2 = criarLivro('Mostre seu trabalho', 'Austin Kleon', 190, true)

// Adiciona os livros na biblioteca
biblioteca.push(livro1)
biblioteca.push(livro2)


function exibirBiblioteca(biblioteca) {
  biblioteca.forEach(function(livro) {
    console.log(livro)
  });
}

exibirBiblioteca(biblioteca)

function criarNovaBiblioteca(biblioteca, titulo) {
  return biblioteca.filter(function(livro) {
    return livro.titulo !== titulo
  })
}

biblioteca = criarNovaBiblioteca(biblioteca, 'Mostre seu trabalho')
console.log(biblioteca)

function marcarComoLido(biblioteca, titulo) {
  biblioteca.forEach(function(livro) {
    if (livro.titulo === titulo) {
      livro.lido = true
    }
  })
}

marcarComoLido(biblioteca, 'Roube como um artista')

console.log(biblioteca)