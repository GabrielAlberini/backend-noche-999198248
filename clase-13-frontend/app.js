// http://localhost:50000/products
// https://rickandmortyapi.com/api/character
const $section = document.querySelector("section")

const traerProductos = async () => {
  const respuestaDelServidor = await fetch("http://localhost:50000/products")
  const products = await respuestaDelServidor.json()

  products.forEach((product) => {
    $section.innerHTML += `<h3>${product.name}</h3>`
  })
}

traerProductos()