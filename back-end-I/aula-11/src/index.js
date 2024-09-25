// Importar a biblioteca express
import express from 'express'
// Importar a biblioteca cors
import cors from 'cors'

// Importar a biblioteca bcrypt
import bcrypt from 'bcrypt'

// Importar a biblioteca uuid
import { v4 as uuidv4 } from 'uuid';

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
    // id: users.length + 1,
    id: uuidv4(),
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

  const user = users.find(user => user.id === id)

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

app.delete('/users/:id', (request, response) => {
  // const id = request.params.id
  const { id } = request.params

  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex === -1) {
    return response.status(404).json({
      message: 'Usuário não encontrado'
    })
  }

  // const deletedUser = users.splice(userIndex, 1)[0]
  const [ deletedUser ] = users.splice(userIndex, 1)

  // return response.status(204) -> status code no-content
  return response.status(200).json({
    message: 'Usuário excluído com sucesso.',
    user: deletedUser
  })
})

// senha original 
// senhasecreta123

// Salt 10
// 1ab3ckfkf2

// senhasecreta1231ab3ckfkf2

const adminUsers = []

app.post('/signup', async (request, response) => {
  try {
    const { username, password } = request.body

    const hashedPassword = await bcrypt.hash(password, 10) // 10 é o salt -> sequência aleaatória

    const existingUser = adminUsers.find(user => user.username === username) 

    if (existingUser) {
      return response.status(400).json({
        message: 'Usuário já existe.'
      })
    }

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword
    }

    adminUsers.push(newUser)

    return response.status(201).json({
      message: 'Admin cadastrado com sucesso',
      newUser
    })
  } catch (error) {
    response.status(500).json({
      message: `Erro ao registrar admin. ${error}`
    })
  }
})

app.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body

    const user = adminUsers.find(user => user.username === username)

    if (!user) {
      return response.status(404).json({
        message: 'Admin não encontrado.'
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return response.status(400).json({
        message: 'Credenciais inválidas.'
      })
    }

    return response.status(200).json({
      message: 'Login feito com sucesso.'
    })
  } catch (error) {
    response.status(500).json({
      message: `Erro ao fazer login. ${error}`
    })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
