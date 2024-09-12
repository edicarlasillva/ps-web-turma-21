// const arrayVazio = []
// const arrayComValores = [1, 2, 3]

// console.log(arrayComValores[arrayComValores.length - 1])

const arr = [1, 2, 3, 4]
// arr.push(3)

// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

// arr.shift()
// console.log(arr)

// for (const valor of arr) {
//   console.log(valor)
// }

// arr.forEach(function(valor, indice, arr) {
//   console.log(indice, valor, arr)
// })

// arr.forEach(valor => console.log(valor))

// const novoArray = arr.map(valor => valor * 2)

// console.log(novoArray)

// // arr.map(function(valor) {
// //   return valor * 2
// // })

// console.log(arr.filter(valor => valor >= 2))

// console.log(arr.find(valor => valor > 1)) // find traz o primeiro elemento que satisfaz a condição

// console.log(arr.findIndex(valor => valor > 1)) // findIndex traz o primeiro indice que satisfaz a condição


// console.log(arr.some(valor => valor > 2))

// console.log(arr.splice(1, 2))
// console.log(arr)

// console.log(arr.slice(1, 3))
// console.log(arr)


const pessoa = {
  nome: 'Maria',
  idade: 30,
  profisao: 'Médica',
  'tem-filho': true
}

console.log(pessoa.profisao)
console.log(pessoa['tem-filho'])

pessoa.peso = 62

console.log(pessoa)

pessoa.profisao = 'Programadora'

console.log(pessoa)

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`)
}

// Verificar se a propriedade nome existe no objeto pessoa
console.log('nome' in pessoa) // true