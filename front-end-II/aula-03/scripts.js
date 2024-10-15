// const username = document.getElementsByName('username')

// console.log(username)

// const password = document.getElementById('password')
// const togglePassword = document.getElementById('togglePassword')

// togglePassword.addEventListener('click', () => {
//   const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
//   password.setAttribute('type', type)

//   togglePassword.textContent = type === 'password' ? '👁️' : '🙈'
// })

// const esportes = document.querySelectorAll('input[name="esporte"]')

// esportes.forEach(esporte => {
//   esporte.addEventListener('change', () => {
//     console.log(`Opção escolhida ${esporte.value}`)
//   })
// })


const select = document.getElementById('cidade')

select.addEventListener('change', () => {
  console.log(`Cidade selecionada: ${select.value}`)
})