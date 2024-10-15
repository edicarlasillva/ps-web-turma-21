const userContainer = document.querySelector('.user-list')
const loadingIndicator = document.querySelector('.loading')

const userCardTemplate = document.getElementById('user-card-template').content

async function fetchUsers() {
  loadingIndicator.style.display = 'block'
  userContainer.innerHTML = ''

  try {
   const response = await axios.get('https://reqres.in/api/users')
   const users = response.data.data

   console.log(users)

   users.forEach(user => {
    const userCard = userCardTemplate.cloneNode(true)

    userCard.querySelector('img').src = user.avatar
    userCard.querySelector('h2').textContent = `${user.first_name} ${user.last_name}`
    userCard.querySelector('p').textContent = `E-mail: ${user.email}`

    userContainer.appendChild(userCard)
   })
  } catch (error) {
    console.error('Erro ao buscar usuários', error)
  } finally {
    loadingIndicator.style.display = 'none'
  }
}

fetchUsers()