import { User, validateUser } from "./ejercicio";

const registerUser = (user: User) => {
  const valid = validateUser(user)

  if (!valid) {
    return { success: false, error: "Datos inválidos" }
  }

  if (valid) {
    return { success: true, data: user }
  }
}

const result = registerUser({
  id: "lala",
  email: "luciano@gmail.com",
  password: "pep"
})

console.log(result)