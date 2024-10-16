const notesContainer = document.getElementById('notes-list')

async function fetchNotes() {
  try {
    notesContainer.innerHTML = ''
    const userId = '0a0b3462-e3f8-4250-9064-ce3879d0236e'

    const response = await api.get(`/notes/${userId}`)
    const notes = response.data.notes

    notes.forEach((note) => {
      const noteCard = document.createElement('div')
      noteCard.classList.add('card')

      noteCard.innerHTML = `
        <h3 class="card-title">${note.title}</h3>
        <p class="card-description">${note.description}</p>

        <div class="card-icons">
          <i class="bi bi-trash" data-id=${note.id}></i>
          <i class="bi bi-pencil" data-id=${note.id}></i>
        </div>
      `
      
      notesContainer.appendChild(noteCard)

      const editIcon = noteCard.querySelector('.bi-pencil')
      editIcon.addEventListener('click', () => {
        const noteId = editIcon.getAttribute('data-id')

        navigateToEditPage(noteId)
      })

      const deleteIcon = noteCard.querySelector('.bi-trash')
      deleteIcon.addEventListener('click', () => {
        const noteId = deleteIcon.getAttribute('data-id')

        deleteNote(noteId)
      })

      if (notes.length === 0) {
        console.log('Nenhum recado para mostar')
      }
    })
  } catch (error) {
    console.error('Erro ao buscar recados.', error)
  }
}

function navigateToEditPage(noteId) {
  location.href = `edit-note.html?id=${noteId}`
}

fetchNotes()