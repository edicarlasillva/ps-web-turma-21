import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

import { validateUserRegistration } from './../middlewares/validation'

const router = express.Router()

// Exportação nomeada
export const users = []

router.post('/signup', validateUserRegistration, async (request, response) => {
  const { name, email, password } = request.body

  const emailAlreadyRegistration = users.find(user => user.email === email)

  if (emailAlreadyRegistration) {
    return response.status(400).json({
      message: 'E-mail já cadastrado.'
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword // salva a senha "encriptada" no array
  }

  users.push(newUser)

  response.status(201).json({
    message: 'Conta criada com sucesso.',
    user: newUser
  })
})

router.post('/login', async (request, response) => {
  const { email, password } = request.body

  const user = users.find(user => user.email === email)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return response.status(400).json({
      message: "Credenciais inválidas."
    })
  }

  response.status(200).json({
    message: 'Login feito com sucesso!',
    userId: user.id
  })
})

// Exportação default
export default router


