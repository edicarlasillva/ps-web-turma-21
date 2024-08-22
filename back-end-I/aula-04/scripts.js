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

// let numero = parseInt(prompt('Digite um número'))

// let contador = 1

// do {
//   let resultado = numero * contador
//   document.write(`${numero} x ${contador} = ${resultado}<br>`)

//   contador++
// } while (contador <= 10)

// let count = 0

// for (;;) {
//   console.log(count)
//   count++

//   if (count >= 5) {
//     break
//   }
// }

// Desenvolva um programa que peça ao usuário para inserir um número inteiro positivo n. Em seguida, calcule a média dos números de 1 até n. Exiba a média no final.

// let numero = parseInt(prompt('Digite um numero inteiro:'));
// let soma = 0;

// for (let i =1; i<= numero; i++){
//   soma +=i
// }
// console.log(soma/numero)

// Crie um programa que solicita ao usuário inserir um número inteiro positivo. Em seguida, use um loop for para exibir todos os números pares de 1 até o número inserido e, em seguida, todos os números ímpares de 1 até o número inserido.

// let numero2 = Number(prompt('Escolha um número inteiro positivo: '))

// for (i = 0; i <= numero2; i++) {
//     if (i % 2 === 0) {
//         document.write('Numero Par!' + i + '<br>')
//     } else {
//         document.write('Numero Impar!' + i + '<br>')
//     }
// }


// Peça ao usuário para inserir um número inteiro positivo n. Em seguida, calcule e exiba o fatorial desse número. O fatorial de um número n é o produto de todos os inteiros positivos de 1 até n.

// let numero = parseInt(prompt('Digite um numero inteiro:'));
// let fatorial = 1
// for (let i = numero; i >= 1; i--) {
//   fatorial *= i
// }
// console.log(`O fatorial de ${numero} é ${fatorial}`)


console.log(Number.isInteger(5.6))
console.log(Number.isInteger(7))