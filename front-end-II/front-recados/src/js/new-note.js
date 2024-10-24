const formNewNote = document.getElementById('form-new-note')
const title = document.getElementById('title')
const description = document.getElementById('description')

async function createNewNote(note) {
  try {
    const response = await api.post('/notes', note)

    if (response.status === 201) {
      alert('Recado cadastrado com sucesso!')

      title.value = ''
      description.value = ''

      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao cadastar recado', error)
  }
}

formNewNote.addEventListener('submit', (event) => {
  event.preventDefault()

  // const userId = '0a0b3462-e3f8-4250-9064-ce3879d0236e'
  const userId = localStorage.getItem('userId')

  const newNote = {
    title: title.value,
    description: description.value,
    userId
  }

  createNewNote(newNote)
})
