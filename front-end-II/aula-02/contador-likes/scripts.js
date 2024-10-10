const h1 = document.createElement('h1')
h1.textContent = 'Contador de likes'
document.body.appendChild(h1) // inclui na DOM

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)

const h2 = document.createElement('h2')
h2.textContent = 'Postagem'
container.appendChild(h2)

const contador = document.createElement('p')
contador.setAttribute('id', 'contador')
contador.textContent = '0'
container.appendChild(contador)

const status = document.createElement('p')
status.classList.add('aguardando')
status.textContent = 'Seja o primeiro a curtir'
container.appendChild(status)

const button = document.createElement('button')
button.textContent = 'Curtir'
container.appendChild(button)

let numeroLikes = 0
const numeroMinimoLikes = 10

function incrementarLikes() {
  numeroLikes++
  contador.textContent = numeroLikes

  if (numeroLikes >= numeroMinimoLikes) {
    status.textContent = 'Postagem popular'
    status.classList.replace('aguardando', 'postagem-popular')
  } else {
    status.textContent = 'Seja o primeiro a curtir'
    status.classList.replace('postagem-popular', 'aguardando')
  }
}

button.onclick = incrementarLikes