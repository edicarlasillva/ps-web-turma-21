// console.log('Hello, DOM!')

// MÉTODOS

// // history.back() // volta a página anterior
// // history.forward() // avança para a próxima página
// // history.go(-2) // navega para trás duas páginas

// const primeiroAluno = document.querySelector('.aluno')
// console.log(primeiroAluno)

// const todosAlunos = document.querySelectorAll('.aluno')
// console.log(todosAlunos)
// console.log(todosAlunos[1]) // Acessando pela posição do elemento

// const alunos = document.getElementsByClassName('aluno')
// console.log(alunos)

// const aluno1 = document.getElementById('aluno-1')
// console.log(aluno1)

// const itensLista = document.getElementsByTagName('li')
// console.log(itensLista)

// const idDoAluno = aluno1.getAttribute('id')
// console.log(idDoAluno)

// const button = document.getElementById('chamada')
// button.setAttribute('disabled', 'disabled')

// const button2 = document.querySelector('#chamada')


// const elements = document.querySelectorAll('li')
// console.log(elements)

// const array = Array.from(elements)
// console.log(array)

// array.forEach(item => item.classList.add('escola'))

// const elements = document.querySelectorAll('li')
// const array = [...elements] // spred operator

// array.map(item => item.classList.add('escola'))

// window.onload = () => {
//   // o código
// }

// PROPRIEDADES
const aluno1 = document.getElementById('aluno-1')
aluno1.innerText = 'José'
console.log(aluno1)

aluno1.innerHTML = '<strong>Felipe</strong>'

aluno1.textContent = 'Débora'

const aluno3 = document.getElementById('aluno-3')

aluno3.classList.add('escola')
// aluno3.classList.remove('ativo')
aluno3.classList.toggle('ativo')

console.log(aluno3.classList.contains('ativo'))
aluno3.classList.replace('ativo', 'inativo')

const listaPresenca = document.getElementById('lista-presenca')
const novoAluno = document.createElement('li')

novoAluno.textContent = 'Carlos'
novoAluno.classList.add('aluno')

listaPresenca.appendChild(novoAluno)

const aluno2 = document.getElementById('aluno-2')
listaPresenca.removeChild(aluno2)

console.log(listaPresenca.nextElementSibling)

console.log(listaPresenca.parentElement)

aluno1.style.backgroundColor = 'green'
aluno1.style.border = '1px solid red'

