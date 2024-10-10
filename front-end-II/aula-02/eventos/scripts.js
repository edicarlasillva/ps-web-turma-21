// let counter = 0

// const elementCounter = document.getElementById('counter')
// const button = document.querySelector('button')

// function incrementarCounter() {
//   counter++
//   elementCounter.textContent = counter
// }

// button.onclick = incrementarCounter

//Usando addEventListener
// let counter = 0

// const elementCounter = document.getElementById('counter')
// const button = document.querySelector('button')

// function incrementarCounter() {
//   counter++
//   elementCounter.textContent = counter
// }

// button.addEventListener('click', incrementarCounter)

// const button = document.querySelector('button')

// function clickEvent(event) {
//   console.log('Evento de clique ocorreu!')
//   console.log(event.type)
//   console.log(event.clientX, event.clientY)

//   // this se refere ao próprio elemento que foi clicado
//   this.textContent = 'O texto mudou!'
// }

// button.addEventListener('click', clickEvent)

// const element = document.querySelector('.element')

// function highlightedElement() {
//   element.classList.add('highlighted')
// }

// function unhighlightedElement() {
//   element.classList.remove('highlighted')
// }

// // quando passa o mouse
// element.addEventListener('mouseover', highlightedElement)
// element.addEventListener('mouseout', unhighlightedElement)

// const input = document.getElementById('input')
// const feedback = document.getElementById('feedback')

// input.addEventListener('keydown', (event) => {
//   feedback.textContent = `Tecla pressionada: ${event.key}`
// })

// input.addEventListener('keyup', () => {
//   feedback.textContent = 'Tecla liberada'
// })