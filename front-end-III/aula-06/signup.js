(() => {
  const formSignup = document.getElementById('form-signup')
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const rePassword = document.getElementById('re-password')

  // Alerts
  const successAlertSignup = document.getElementById('success-alert-signup')
  const errorAlertSignup = document.getElementById('error-alert-signup')

  formSignup.addEventListener('submit', async (event) => {
    event.preventDefault()

    const passwordValue = password.value
    const rePasswordValue = rePassword.value

    if (passwordValue !== rePasswordValue) {
      errorAlertSignup.innerText = 'As senhas precisam ser iguais. Por favor digite novamente.'

      successAlertSignup.classList.add('d-none')
      errorAlertSignup.classList.remove('d-none')
    } else {
      const data = {
        name: name.value,
        email: email.value,
        password: passwordValue
      }

      try {
        const response = await api.post('/users/signup', data)

        if (response.status === 201) {
          successAlertSignup.classList.remove('d-none')

          setTimeout(() => {
            location.href = '/index.html'
          }, 3000) // 3s
        }
      } catch (error) {
        const errorMessage = error?.response?.data?.message ?? 'Erro ao cadastrar usuário. Por favor, tente novamente.'
  
        errorAlertSignup.innerText = errorMessage
        errorAlertSignup.classList.remove('d-none')
        successAlertSignup.classList.add('d-none')
      }
    }
  })

})()