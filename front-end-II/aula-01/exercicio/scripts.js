// Salvar em variáveis os elementos que vamos manipular
const contador = document.getElementById('contador')
const status = document.getElementById('status')

let numeroPessoas = 0
const numeroMinimo = 5

function registrarPresenca() {
  numeroPessoas++
  contador.textContent = numeroPessoas

  if (numeroPessoas >= numeroMinimo) {
    status.textContent = 'A aula pode começar'
    // status.classList.remove('aguardando')
    // status.classList.add('pode-comecar')
    status.className = 'pode-comecar'
  } else {
    status.textContent = 'Aguarde por mais presenças'
    status.className = 'agurdando'
  }
}
