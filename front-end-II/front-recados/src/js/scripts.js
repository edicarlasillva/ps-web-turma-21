const notesContainer = document.getElementById('notes-list')

const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

let currentPage = 1
let totalPages = 1

async function fetchNotes(page) {
  try {
    notesContainer.innerHTML = ''
    // const userId = '99f66f3e-6e70-4cc6-95ae-c735f7739dd3'
    const userId = localStorage.getItem('userId')

    if (!userId) {
      alert('Você precisa fazer login para visualizar os recados.')
      location.href = 'index.html'
      return
    }

    const params = {
      page, 
      perPage: 3
    }

    // http:// localhost:3000/notes/99f66f3e-6e70-4cc6-95ae-c735f7739dd3?page=1&perPage=3
    const response = await api.get(`/notes/${userId}`, { params })
    const notes = response.data.notes

    totalPages = response.data.totalPages

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

      updatedPaginationButtons()
    })
  } catch (error) {
    console.error('Erro ao buscar recados.', error)
  }
}

function navigateToEditPage(noteId) {
  location.href = `edit-note.html?id=${noteId}`
}

fetchNotes(currentPage)

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--

    fetchNotes(currentPage)
  }
})

nextPage.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++

    fetchNotes(currentPage)
  }
})

function updatedPaginationButtons() {
  prevPage.disabled = currentPage === 1
  nextPage.disabled = currentPage === totalPages
}