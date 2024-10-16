async function deleteNote(noteId) {
  try {
    const response = await api.delete(`/notes/${noteId}`)

    if (response.status === 200) {
      alert('Recado excluído com sucesso!')
    }

    location.reload()
  } catch (error) {
    console.error('Erro ao excluir recado.', error)
  }
}