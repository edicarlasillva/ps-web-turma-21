const formLogin = document.getElementById('form-login')

const email = document.getElementById('email-login')
const password = document.getElementById('password-login')

function setError(input, message) {
  const formControl = input.parentElement 
  const small = formControl.querySelector('small')

  small.textContent = message
  formControl.classList.remove('success')
  formControl.classList.add('error')
}

function setSuccess(input) {
  const formControl = input.parentElement

  formControl.classList.remove('error')
  formControl.classList.add('success')
}

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const { userId }  = response.data

      localStorage.setItem('userId', userId)
      
      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao fazer login', error)
  }
}

formLogin.addEventListener('submit', (event) => {
  event.preventDefault()

  const data = {
    email: email.value,
    password: password.value
  }

  if (!email.value) {
    setError(email, 'E-mail é obrigatório')
  } else {
    setSuccess(email)
  }

  if (!password.value) {
    setError(password, 'Senha é obrigatória')
  } else {
    setSuccess(password)
  }

  if (data.email && data.password) {
    login(data)
  }
})