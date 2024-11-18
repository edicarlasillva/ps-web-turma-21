const openModalButton = document.getElementById('openModalButton')
const myModal = new bootstrap.Modal(document.getElementById('form-edit-note'))

openModalButton.addEventListener('click', () => {
  myModal.show()
})