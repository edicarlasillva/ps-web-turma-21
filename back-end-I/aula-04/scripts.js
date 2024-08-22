// const numeroAleatorio = Math.floor((Math.random() * 10) + 1)
// let tentativas = 0

// while (true) {
//   const palpite = parseInt(prompt('Adivinhe o número entre 1 e 10.'))

//   tentativas++

//   if (palpite === numeroAleatorio) {
//     alert('Parabéns! Você acertou.')
//     break
//   } else {
//     alert('Tente novamente.')
//   }
// }

// const numeroAleatorio = Math.floor(Math.random() * 10) + 1
// let tentativas = 0
// let acertou = false

// while (!acertou) {
//   const palpite = parseInt(prompt('Adivinhe o número entre 1 e 10. '))

//   tentativas++

//   if (palpite === numeroAleatorio) {
//     alert(`Parabéns! Você acertou em ${tentativas} tentativas.`)
//     acertou = true
//   } else {
//     alert('Tente novamente.')
//   }
// }

// let numero

// do {
//   numero = parseInt(prompt('Digite um número maior que 10.'))
// } while(numero <= 10)

// alert(`Você digitou um número válido: ${numero}`)

// let numero = parseInt(prompt('Digite um número inteiro e positivo.'))
// let contador = 1
// let resultado = ''

// while (contador <= numero) {
//   resultado += contador + ' '
//   contador++
// }

// alert(`${resultado} Acabou!`)

// let numero = parseInt(prompt('Digite um número inteiro e positivo.'))
// let contador = 1
// let resultado = ''

// do {
//   resultado += contador + ' '
//   contador++
// } while(contador <= numero)

// alert(`${resultado} Acabou!`)

// let numero
// let resultado = ''
// let contador = 1

// do {
//   numero = parseInt(prompt('Digite um número inteiro e positivo.'))
// } while (isNaN(numero) || numero <= 0)

// while (contador <= numero) {
//   resultado += contador + ' '
//   contador++
// }

// alert(`${resultado} Acabou!`)

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// let numero = parseInt(prompt('Digite um número'))

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i
//   console.log(`${numero} x ${i} = ${resultado}`)
// }

// let numero = parseInt(prompt('Digite um número'))

// let contador = 1

// while (contador <= 10) {
//   let resultado = numero * contador
//   console.log(`${numero} x ${contador} = ${resultado}`)

//   contador++
// }

let numero = parseInt(prompt('Digite um número'))

let contador = 1

do {
  let resultado = numero * contador
  console.log(`${numero} x ${contador} = ${resultado}`)

  contador++
} while (contador <= 10)