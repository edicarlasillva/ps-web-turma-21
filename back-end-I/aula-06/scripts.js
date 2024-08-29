// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// console.log(listaDeCompras)

// const fruta = listaDeCompras[2]

// console.log(fruta)

// const alunos = ['João', 'Marcelo', 'Lucas']
// console.log(alunos[1])


// // alunos[3] = 'Carla'
// alunos[alunos.length] = 'Jéssica'

// console.log(alunos.length)

// alunos[alunos.length] = 'Carlos'
// console.log(alunos)

// const array = [1, 2, 3, 4, 5]
// // Assignment to constant variable
// array = 'Carla'

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// for (let i = 0; i < listaDeCompras.length; i++) {
//   console.log(listaDeCompras[i])
// }

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// for (const item of listaDeCompras) {
//   console.log(item)
// }

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// let indice = 0

// while (indice < listaDeCompras.length) {
//   console.log(listaDeCompras[indice])

//   indice++
// }

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// let indice = 0

// do {
//   console.log(listaDeCompras[indice])
//   indice++
// } while (indice < listaDeCompras.length)

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']
// // Adiciona o elemento no final do array
// listaDeCompras.push('Laranja')

// console.log(listaDeCompras)
// // Adiciona o elemento no início do array
// listaDeCompras.unshift('Morango')

// console.log(listaDeCompras)
// // Remove o último elemento do array
// listaDeCompras.pop()

// console.log(listaDeCompras)
// // Remove o primeiro elemento do array
// listaDeCompras.shift()

// console.log(listaDeCompras)

// const indice = listaDeCompras.indexOf('Banana')
// console.log(indice)

// const numeros = [10, 20, 30, 40, 50, 60]

// console.log(numeros.join(' . '))

// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// console.log(listaDeCompras.slice(0, 2))


// const listaDeCompras = ['Maçã', 'Banana', 'Uva']

// delete listaDeCompras[2]
// console.log(listaDeCompras)

// const linguagens = []

// linguagens[0] = 'Javascript'
// linguagens[1] = 'Python'
// linguagens[2] = 'Java'
// linguagens[3] = 'C#'

// console.log(linguagens)

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// console.log(matriz[2][2]) // 2

// for (let i = 0; i < matriz.length; i++) { // linha
//   for (let j = 0; j < matriz[i].length; j++) { // elementos
//     console.log(matriz[i][j])
//   }
// }

// Usando for..of
// for (const linha of matriz) {
//   for (const elemento of linha) {
//     console.log(elemento)
//   }
// }

// Crie  um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com o array utilizando um loop para mostrar
// no console O brasil ganhou a copa de 1959...
// const brasilGanhouCopas = [1959, 1962, 1970, 1994, 2002]

// for (const ano of brasilGanhouCopas) {
//   console.log(`O brasil ganhou a copa de ${ano}`)
// }

// for (let i = 0; i < brasilGanhouCopas.length; i++) {
//   console.log(`O brasil ganhou a copa de ${brasilGanhouCopas[i]}`)
// }

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// 'Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'
// const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

// for (const fruta of frutas) {
//   console.log(fruta)

//   if (fruta === 'Pera') {
//     break
//   }
// }

// Coloque a última fruta do array em uma variável, 
// sem remover a mesma do array. 
// const ultimaFruta = frutas[frutas.length - 1]
// // frutas[5 - 1]
// console.log(ultimaFruta)


// const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

// frutas.forEach((fruta, indice, array) => {
//   console.log(fruta, indice)
//   console.log(array)
// })

// let continuar = confirm('Desja inserir outra nota?')