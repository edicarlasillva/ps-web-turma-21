// // // alert('Hello, world!')

// // // String
// // let nome = "Carla";
// // // ; é opcional
// // let nome1 = 'João'
// // let nome2 = `Juliana`;
// // let ola = 'Hello, world!';

// // console.log(nome);
// // console.log(ola);
// // console.log('Carla')

// // // Number
// // let idade = 25

// // console.log(idade)

// // let preco = 19.99

// // console.log(preco)

// // // Boolean
// // let estaChovendo = false // true
// // console.log(estaChovendo)

// // // undefined
// // let sobrenome
// // console.log(sobrenome)
// // // null

// // let a = 2
// // console.log(a)
// // let b = a
// // a = 5
// // console.log(b)
// // console.log(a)

// // let lista = 'banana, uva, morango'
// // console.log(typeof estaChovendo)

// // Adição
// let soma = 3 + 5;
// console.log(soma)

// // Subtração
// let subtracao = 7 - 2
// console.log(subtracao)

// // Multiplicação
// let multiplicacao = 4 * 6
// console.log(multiplicacao)

// // Divisão
// let divisao = 10 / 2
// console.log(divisao)

// // Resto da divisão
// let resto = 10 % 3
// console.log(resto)

// // Incremento
// let numero = 5
// console.log(++numero)

// // Decremento
// let numero2 = 8
// console.log(--numero2)

// // Exponenciação
// let potencia = 2 ** 3
// console.log(potencia)

// // console.log(Math.pow(2, 3))

// let num1 = 10
// let num2 = '20'
// console.log(num1 * Number(num2))

// Operadores de atribuição
// let a = 10
// let b = 3

// a += 5 // a = a + 5 (15)
// console.log(a)

// b -= 2 // b = b - 2 (1)
// console.log(b)

// a *= 3 // a = a * 3
// console.log(a)

// b /= 4 // b = b / 4
// console.log(b)

// a %= 7 // a = a % 7
// console.log(a)

// Operadores relacionais
// let num1 = 5
// let num2 = 7

// // maior que
// let maior = num2 > num1
// console.log(maior)

// // menor que
// let menor = num2 < num1
// console.log(menor)

// // maior ou igual a
// let maiorOuIgual = num1 >= 5
// console.log(maiorOuIgual)

// // menor ou igual a
// let menorOuIgual = num2 <= 7
// console.log(menorOuIgual)

// // igual a
// let igual = num1 === '5'
// console.log(igual)

// let diferente = num1 !== 5
// console.log(diferente)

// let haveMoney = false

// if (haveMoney) {
//   console.log('Vou passear no domingo.')
// } else {
//   console.log('Não vou passear no domingo.')
// }

// let num = 10

// if (num >= 10) {
//   console.log('Sim! O número é maior ou igual a 10')
// } else {
//   console.log('Não. O número não é maior ou igual a 10.')
// }

// (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3)

// Entrada de dados
let nota1 = 7
let nota2 = 8
let nota3 = 10

let peso1 = 2
let peso2 = 3
let peso3 = 5

// Processamento
// Cálculo média ponderada
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3)

// Verificar se o aluno passou ou não.
if (mediaPonderada >= 7) {
  console.log('O aluno passou com média: ', mediaPonderada)
} else {
  console.log('O aluno reprovou com média: ', mediaPonderada)
}

// Entrada de dados
let anos = 30
let meses = 6
let dias = 15

// Processamento
// Cálculo
let idadeEmDias = (anos * 365) + (meses * 30) + dias

// Saída
console.log('A idade da pessoa é ' + idadeEmDias + ' dias.')
