import express, { request, response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import { users } from './users'

const router = express.Router()

const notes = []

router.get('/:userId', (request, response) => {
  // entrada de dados
  const { userId } = request.params 

  // processamento
  const user = users.find(user => user.id === userId)

  if (!user) {
    // saída
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  const userNotes = notes.filter(note => note.userId === userId)

  // saída
  return response.status(200).json({
    message: `Notas de ${user.name} filtradas com sucesso.`,
    notes: userNotes
  })
})

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

router.put('/:id', (request, response) => {
  // entrada de dados
  const { id } = request.params
  const { title, description } = request.body

  // processamento
  const note = notes.find(note => note.id === id)

  if (!note) {
    return response.status(404).json({
      message: 'Recado não encontrado.'
    })
  }

  note.title = title
  note.description = description

  return response.status(200).json({
    message: 'Recado atualizado com sucesso.',
    note
  })
})

router.delete('/:id', (request, response) => {
    // entrada de dados
    const { id } = request.params

    const noteIndex = notes.findIndex(note => note.id === id) 

    if (noteIndex === -1) {
      return response.status(404).json({
        message: 'Recado não encontrado'
      })
    }

    //const deletetedNote = notes.splice(noteIndex, 1)[1]
    const [ deletetedNote ] = notes.splice(noteIndex, 1)

    response.status(200).json({
      message: 'Recado excluído com sucesso.',
      note: deletetedNote
    })
})

export default router

