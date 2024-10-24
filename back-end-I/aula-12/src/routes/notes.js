import express, { request, response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import { users } from './users'

const router = express.Router()

const notes = []

// router.get('/:userId', (request, response) => {
//   // entrada de dados
//   const { userId } = request.params 

//   // processamento
//   const user = users.find(user => user.id === userId)

//   if (!user) {
//     // saída
//     return response.status(404).json({
//       message: 'Usuário não encontrado.'
//     })
//   }

//   const userNotes = notes.filter(note => note.userId === userId)

//   // saída
//   return response.status(200).json({
//     message: `Notas de ${user.name} filtradas com sucesso.`,
//     notes: userNotes
//   })
// })

router.get('/:userId', (request, response) => {
  const { userId } = request.params

  // http://localhost:3000/notes/hdhdhdhdhd?page=2&perPage=15
  const { page, perPage } = request.query

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  const currentPage = parseInt(page) || 1 // valor padrão 1
  const itemsPerPage = parseInt(perPage) || 10 // valor padrão 10

  const userNotes = notes.filter(note => note.userId === userId)

  const totalItems = userNotes.length

  // currenPage = 2
  // itemsPerPage = 10
  // startIndex = (2 - 1) * 10 = 10
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedNotes = userNotes.slice(startIndex, endIndex)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  response.status(200).json({
    notes: paginatedNotes,
    totalPages,
    currentPage
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

router.get('/details/:id', (request, response) => {
  const { id } = request.params

  const note = notes.find(note => note.id === id)

  if (!note) {
    return response.status(404).json({
      message: 'Recado não encontrado.'
    })
  }

  response.status(200).json(note)
})

export default router

