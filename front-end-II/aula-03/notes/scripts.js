async function createNewNote() {
  const newNote = {
    title: 'Estudar Eventos',
    description: 'Preciso revisar os assuntos',
    userId: '441ea3b3-ab2a-461e-9490-110792670f03'
  }

  try {
    const response = await api.post('/notes', newNote)

    if (response.status === 201) {
      console.log('Recado cadastrado com sucesso.')

      location.href = 'listagem.html'
    }
    console.log(response)
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error)
  }
}

createNewNote()