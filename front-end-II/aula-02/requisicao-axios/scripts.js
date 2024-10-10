// const promessa = new Promise((resolve, reject) => {
//   const condicao = true

//   if (condicao) {
//     setTimeout(() => {
//       resolve('Estou resolvida.')
//     }, 2000) // 2s
//   } else {
//     reject('Ocorreu um erro.')
//   }
// })

// promessa
//   .then(resultado => {
//     console.log(resultado)
//     return `${resultado}. Segundo then.`
//   })
//   .then(novoResultado => console.log(novoResultado))
//   .catch(error => console.log('Erro: ', error))

// async function fetchUsers() {
//   try {
//     const response = await axios.get('https://reqres.in/api/users')
//     const users = response.data.data

//     console.log(users)
//   } catch (error) {
//     console.log(error)
//   }

//   finally {
//     console.log('Finalizou!')
//   }
// }

// fetchUsers()

// Usando then
function fetchUsers() {
  axios.get('https://reqres.in/api/users')
  .then(response => {
    const users = response.data.data
    console.log(users)
  })
  .catch(error => console.error('Erro ao buscar usuários', error))
  .finally(() => console.log('Finalizou'))
}

fetchUsers()
  