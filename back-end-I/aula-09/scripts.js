// sayHello() // Cannot access 'sayHello' before initialization

// const sayHello = function() {
//   console.log('Hello!')
// }

// sayHelloDeclaration() // Com function declaration não dá erro chamar antes da declaração.

// function sayHelloDeclaration() {
//   console.log('Hello')
// }


// Valor padrão, caso o usuário não passe os argumentos ao executar a função.
// function sum(a = 2, b = 3) {
//   console.log(a)
//   console.log(b)

//   console.log(a + b)

//   return a + b
// }

// console.log(sum())


// Estrutura base da arrow function
const functionName = () => {
  //...
  return result
}

// const sum = (num1, num2) => {
//   return num1 + num2
// }

// console.log(sum(2, 3))

// Se só tiver uma linha no corpo da função, return e chaves são opcionais
// const sum = (a, b) => a + b

// console.log(sum(8, 9))

// const multiply = num => num * num

// console.log(multiply(3))

// const sayHello = name => `Hello, ${name}!`

// console.log(sayHello('Carla'))

// const welcome = () => 'Seja bem-vindo!'

// console.log(welcome())

// const ages = [15, 22, 18, 27, 14]

// const filteredAges = ages.filter(age => age >= 18)

// console.log(filteredAges)

// Encontrar o índice (posição do elemento no array) do primeiro número PAR em um array de inteiros.

// const numbers = [1, 3, 5, 4, 7, 9]
// const findIndexOfFirstEvenNumber = numbers.findIndex(number => number % 2 === 0)

// console.log(findIndexOfFirstEvenNumber)

// const numbers = [1, 3, 5, 4, 7, 9]
// numbers.forEach(number => console.log(number * 2))

// const fruits = ['Maçã', 'Banana', 'Pera', 'Laranja']
// const result = fruits.find(fruit => fruit === 'Pera')

// console.log(result)

// const colors = ['Vermelho', 'Verde', 'Azul', 'Amarelo']
// const removedColors = colors.splice(1, 2, 'Roxo', 'Laranja', 'Rosa')

// console.log(removedColors) // Verde e Azul
// console.log(colors) // 'Vermelho', 'Roxo', 'Laranja', 'Rosa', 'Amarelo'

// const colors = ['Vermelho', 'Verde', 'Azul', 'Amarelo']
// const updatedColors = [...colors]

// const removedColors = updatedColors.splice(1, 2, 'Roxo', 'Laranja', 'Rosa')

// console.log(removedColors) // Verde e Azul
// console.log(colors) // Vermelho', 'Verde', 'Azul', 'Amarelo'
// console.log(updatedColors) // 'Vermelho', 'Roxo', 'Laranja', 'Rosa', 'Amarelo'

// const temperatures = [25, 30, 22, 15, 18]

// const hasHotTemperature = temperatures.some(temp => temp > 28)

// // Retorna boolean (true or false)
// console.log(hasHotTemperature)

// const numbers = [1, 2, 3, 4, 5]

// const squaredNumbers = numbers.map(number => Math.pow(number, 2))

// console.log(squaredNumbers)

// const numbers = [71, 18, 8, 2]

// const orderedNumbers = numbers.sort()
// console.log(orderedNumbers)

// const names = ['Alice', 'Débora', 'Maria', 'David']

// const orderedNames = names.sort()
// console.log(orderedNames)

// const numbers = [40, 1, 5, 200, 10]
// const updatedNumbers = [...numbers]
// updatedNumbers.sort((a, b) => b - a) // ordem decrescente
// // updatedNumbers.sort((a, b) => a - b) // ordem crescente

// console.log(numbers)
// console.log(updatedNumbers)

// b - a = 1 - 40 = -39 (negativo)
// b - a = 5 - 40 = -35 (negativo)

// const employees = [
//   {name: 'Carla', salary: 2000},
//   {name: 'José', salary: 1000},
//   {name: 'Mariana', salary: 1500}
// ]

// employees.sort((a, b) => b.salary - a.salary)

// console.table(employees)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.includes(3)) // true or false

// const pets = ['Gato', 'Cachorro', 'Coelho']

// console.log(pets.includes('Gato')) // true
// console.log(pets.includes('Elefante')) // false

// const numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(sum)

// const numbers = [1, 2, 3, 4, 5]

// const squaredNumbers = numbers.reduce((acc, currentValue) => {
//   acc.push(currentValue * currentValue)
//   return acc
// }, [])

// console.log(squaredNumbers)

// const elements = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']

// const grouped = elements.reduce((acc, currentValue) => {
//   if (!acc[currentValue]) {
//     acc[currentValue] = []
//   }

//   acc[currentValue].push(currentValue)

//   return acc
// }, {})

// console.log(grouped)

// maça: ['maça', 'maça', 'maça']
// banana: ['banana', 'banana']
// laranja: ['laranja']