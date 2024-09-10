// const idade = 19

// if (idade < 13) {
//   console.log('Criança')
// } else if (idade < 18) {
//   console.log('Adolescente')
// } else {
//   console.log('Adulto')
// }

// const numero = 5

// switch (true) {
//   case numero > 5:
//     console.log('O número é maior que 5.')
//     break
//   case numero === 5: 
//     console.log('O número é igual a 5.')
//     break
//   default:
//     console.log('O número é menor do que 5.')
// }

// const idade = 16
// const status = (idade >= 18) ? 'Adulto' : 'Menor'

// console.log(status)


// let tamanho = prompt('Pizza pequena, média ou grande? (P/M/G)').toUpperCase()
// let refri = prompt('Deseja adicionar refrigerante? (S/N)').toUpperCase()
// let preco = 0;
 

// switch (tamanho) {
//     case 'P':
//       preco = refri === 'S' ? 25 : 20;
//       break;
//     case 'M':
//       preco = refri === 'S' ? 35 : 30;
//       break;
//     case 'G':
//       preco = refri === 'S' ? 45 : 40;
//       break;
//     default: 
//       alert('Digite um valor válido!') 
// }

// console.log(preco)

// const numeroAleatorio = Math.floor(Math.random() * 10) + 1 // números entre 1 e 10
// let tentativas = 0
// let acertou = false

// while (!acertou) {
//   const palpite = parseInt(prompt('Digite um número de 1 a 10'))

//   tentativas++

//   if (palpite === numeroAleatorio) {
//     alert(`Parabéns! Você acertou em ${tentativas} tentativas.`)
//     acertou = true
//   } else {
//     alert('Tente novamente um palpite.')
//   }
// }

// const numeroAleatorio = Math.floor(Math.random() * 10) + 1 // números entre 1 e 10
// let tentativas = 0
// let acertou = false

// do {
//   const palpite = parseInt(prompt('Digite um número de 1 a 10'))

//   tentativas++

//   if (palpite === numeroAleatorio) {
//     alert(`Parabéns! Você acertou em ${tentativas} tentativas.`)
//     acertou = true
//   } else {
//     alert('Tente novamente um palpite.')
//   }
// } while (!acertou)

const numeroAleatorio = Math.floor(Math.random() * 10) + 1 // números entre 1 e 10
let acertou = false

for (let tentativas = 0; !acertou; tentativas++) {
  const palpite = parseInt(prompt('Digite um número de 1 a 10'))
  
    if (palpite === numeroAleatorio) {
      alert(`Parabéns! Você acertou em ${tentativas} tentativas.`)
      acertou = true
    } else {
      alert('Tente novamente um palpite.')
    }
}

// const frutas = ['Maçã', 'Banana', 'Uva']

// for (const fruta of frutas) {
//   console.log(fruta)
// }

// const livro = {
//   titulo: 'A única coisa',
//   numeroPaginas: 250,
//   idioma: 'English'
// }

// for (const chave in livro) {
//   console.log(livro[chave])
// }