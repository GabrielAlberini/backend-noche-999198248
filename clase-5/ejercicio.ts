interface User {
  id: string,
  email: string,
  password: string,
  role?: string
}

const validateUser = (user: User): boolean => {

  // validación 1 ✅
  // es verdad que el correo electrónico no incluye un @?
  if (!user.email.includes("@")) {
    return false
  }

  // validación 2 ✅
  // es verdad que la contraseña no tiene más de 4 caracteres?
  if (user.password.length < 4) {
    return false
  }

  return true
}

export { User, validateUser }

