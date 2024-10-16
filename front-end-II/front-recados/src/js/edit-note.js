const formEditNote = document.getElementById('form-edit-note')
const title = document.getElementById('title-edit')
const description = document.getElementById('description-edit')

const urlParams = new URLSearchParams(location.search)
// ?id=4b816d38-c375-4ea9-9ba6-09bc1382e6e0
const noteId = urlParams.get('id')
// 4b816d38-c375-4ea9-9ba6-09bc1382e6e0

console.log(noteId)

async function populateEditForm() {
  try {
    const response = await api.get(`/notes/details/${noteId}`)
    const note = response.data

    title.value = note.title
    description.value = note.description
    
  } catch (error) {
    console.error('Erro ao atualizar o recado.', error)
  }
}

populateEditForm()

async function updateNote(note) {
  try {
    const response = await api.put(`/notes/${noteId}`, note)

    if (response.status === 200) {
      alert('Recado atualizado com sucesso!')

      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao atualizar o recado.', error)
  }
}

formEditNote.addEventListener('submit', (event) => {
  event.preventDefault()

  const note = {
    title: title.value,
    description: description.value
  }

  updateNote(note)
})

