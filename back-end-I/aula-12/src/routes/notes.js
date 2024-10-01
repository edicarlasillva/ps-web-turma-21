import express, { response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import { users } from './users'

const router = express.Router()

const notes = []

router.post('/', (request, response) => {
  const { title, description, userId } = request.body

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontado.'
    })
  }

  const newNote = {
    id: uuidv4(),
    title,
    description,
    userId
  }

  notes.push(newNote)

  response.status(201).json({
    message: 'Recado cadastrado com sucesso.',
    note: newNote
  })
})

export default router

