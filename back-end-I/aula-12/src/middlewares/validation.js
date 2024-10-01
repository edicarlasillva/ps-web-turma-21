export function validateUserRegistration(request, response, next) {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    return response.status(400).json({
      message: 'O preenchimento dos campos é obrigatório.'
    })
  }

  next()
}
