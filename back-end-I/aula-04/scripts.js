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

let numero

do {
  numero = parseInt(prompt('Digite um número maior que 10.'))
} while(numero <= 10)

alert(`Você digitou um número válido: ${numero}`)