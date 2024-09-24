// Importar a biblioteca express
import express from 'express'
// Importar a biblioteca cors
import cors from 'cors'

// Criar uma instância do express
const app = express()

// api pública - qualquer origem pode acessar
app.use(cors())

// Várias origens
// app.use(cors({
//   origin: ['http://example.com', 'http://seufrontend.com']
// }))

app.use(express.json()) // Permite passar json no corpo da requisição (ex.: POST e PUT)

// Endpoint de teste
app.get('/', (request, response) => {
  response.send('Olá, express!')
})

const users = [
  { id: 1, name: 'Alice', available: true },
  { id: 2, name: 'Bob', available: false },
  { id: 3, name: 'Carol', available: true }
]

// http://localhost:3000/users
// app.get('/users', (request, response) => {
//   if (users.length === 0) {
//     return response.status(404).json({
//       message: 'Nenhum usuário não encontrado.'
//     })
//   }

//   return response.status(200).json(users)
// })

app.post('/users', (request, response) => {
  // const name = request.body.name
  // const available = request.body.available

  const { name, available } = request.body

  if (!name) {
    return response.status(400).json({
      message: 'Nome de usuário é obrigatório.'
    })
  }

  const newUser = {
    id: users.length + 1,
    name,
    available: available ?? true
  }

  users.push(newUser)

  return response.status(201).json({
    message: 'Usuário adicionado com sucesso.',
    user: newUser
  })
})

// http://localhost/users/2
app.put('/users/:id', (request, response) => {
  const { id } = request.params // pegando parâmetros da rota
  const { name: updatedUser, available } = request.body // pegando o corpo da requisição

  const user = users.find(user => user.id === parseInt(id))

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  user.name = updatedUser
  user.available = available

  return response.status(200).json({
    message: 'Usuário atualizado com sucesso',
    user
  })
})

// http://localhost:3000/users?filtro=ativo
app.get('/users', (request, response) => {
  const { filtro } = request.query

  let filteredUsers

  if (filtro === 'ativo') {
    filteredUsers = users.filter(user => user.available === true)
  } else if (filtro === 'inativo') {
    filteredUsers = users.filter(user => user.available === false)
  } else {
    filteredUsers = users
  }

  if (filteredUsers.length === 0) {
    return response.status(404).json({
      message: 'Nenhum usuário encontrado.'
    })
  }

  return response.status(200).json(filteredUsers)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
