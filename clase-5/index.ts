// tipado -> tipo de dato almacenan las variables
// js es de tipado debil

// number
// asignación
let year = 31

console.log(year)

// reasignación
year = 32

console.log(year)

// CONTRATO PARA VALIDAR OBJETOS
interface Pet {
  name: string,
  year: number,
  friends?: string[], // ["Peperina", "Tuerca", 1, true, {}, []]
  colors: string[]
}

const pet1: Pet = {
  name: "Arandela",
  year: 6,
  colors: ["brown"]
}

const pet2: Pet = {
  name: "Peperina",
  year: 1,
  friends: ["Arandela", "Tuerca"],
  colors: ["marrón", "blanco"]
}

const validatePet = (pet: Pet) => {
  if (!pet.name) {
    console.log("Tu mascota no tiene nombre :(")
  } else {
    console.log("Tu mascota tiene nombre :)")
  }
}

const pet3 = {
  name: "Tuerca",
  year: 1,
  friends: ["Peperina"],
  colors: ["black", "white"]
}

validatePet(pet3)