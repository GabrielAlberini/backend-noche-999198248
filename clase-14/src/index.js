import { createProduct, getProducts } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"

// servidor http
const app = express()
app.use(cors())
// Habilita la posibilidad de recibir obj json desde el front
app.use(express.json())

// callback
// OBTENER LA LISTA DE PRODUCTOS
app.get("/products", async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

// AGREGAR UN PRODUCTO
app.post("/products", async (req, res) => {
  // req -> request -> información del cliente
  const body = req.body
  const createdProduct = await createProduct(body)
  res.json(createdProduct)
})

// 0 - 65656
app.listen(50000)