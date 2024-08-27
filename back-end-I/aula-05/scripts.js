// console.log(nome)
// var nome = 'Carla'

// var profisao = 'Programador'
// console.log(profisao)

// console.log(cidade)
// let cidade = 'Salvador'

// console.log(cidade)
// const cidade = 'Salvador'

// {
//   var marca = 'Volkswagen'
//   const ano = 2018
//   let modelo = 'Fusca'
// }

// console.log(marca)
// // console.log(ano)
// console.log(modelo)

// if (true) {
//   var marca = 'Volkswagen'
//   console.log(marca)
// }

// console.log(marca)

// if (true) {
//   let marca = 'Volkswagen'
//   console.log(marca)
// }

// console.log(marca)

// Se usar const para declarar variáveis, precisa inicializar com um valor.
// const name

// for (var i = 0; i <= 10; i++) {
//   console.log(`Número ${i}`)
// }

// // vazou o escopo
// console.log(i)

// const mes = 'Janeiro'
// mes = 'Fevereiro'

// const dados = {  d
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2024
// }

// // dados = 'Maio'

// dados.mes = 'Maio'

// console.log(dados)

// let idade = 0
// let somaIdade = 0
// let contador = 0 
// while (idade != 999 ) {
//   idade = parseInt(prompt('Digite a idade do aluno'))
//   if (idade != 999) {
//     somaIdade += idade
//     contador ++
//   }
// }
// document.write(`Existe ${contador} alunos e a média de idade é ${somaIdade/contador}`)


let totalSalarioMasculino =  0;
let totalSalarioFeminino = 0;

let continua;

do {
    let salario = parseFloat (prompt("Digite o salário do funcionário"));
    let sexo = prompt ("Digite o sexo do funcionário (M/F)").toUpperCase();

    if (sexo === 'M') {
        totalSalarioMasculino += salario;
        } else if (sexo === 'F') {

            totalSalarioFeminino += salario;
        } else {
            alert ("Sexo inválido. Por Favor Digite 'M' para masculino ou 'F' para feminino")
            break;
            
        }

        continua = prompt("Deseja continuar?(S/N):").toUpperCase() === 'S';
    } while (continua);

    alert ("Total dee salários pagos: \nMasculini : R$ " + totalSalarioMasculino.toFixed(2) + "\nFeminino: R$ " + totalSalarioFeminino.toFixed(2));



