(() => {
  const formLogin = document.getElementById('form-login')
  const emailLogin = document.getElementById('email-login')
  const passwordLogin = document.getElementById('password-login')

  // Alerts
  const successAlert = document.getElementById('success-alert-login')
  const errorAlert = document.getElementById('error-alert-login')

  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault()

    const data = {
      email: emailLogin.value,
      password: passwordLogin.value
    }

    console.log(data)

    try {
      const response = await api.post('/users/login', data)

      if (response.status === 200) {
        const userData = response.data

        localStorage.setItem('userId', userData.userId)

        errorAlert.classList.add('d-none')
        successAlert.classList.remove('d-none')

        setTimeout(() => {
          location.href = '/notes.html'
        }, 3000) // 3s
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message ?? 'Error ao fazer login. Por favor, tente novamente.'

      errorAlert.innerText = errorMessage
      errorAlert.classList.remove('d-none')
      successAlert.classList.add('d-none')
    }
  })
})()