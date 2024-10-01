import express from 'express'
import cors from 'cors'

import usersRouter from './routes/users'
import notesRouter from './routes/notes'

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/notes', notesRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

