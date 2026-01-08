import { createProduct, deleteProduct, getProducts, updateProduct } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"
import { connectDb } from "./config/mongodb.js"

const serverHttp = express()

serverHttp.use(cors())
serverHttp.use(express.json())

serverHttp.get("/products", async (req, res) => {
  const products = await getProducts()
  res.json(products)
})

serverHttp.post("/products", async (req, res) => {
  try {
    const body = req.body
    const { name, price, stock, category, description } = body

    if (!name) {
      return res.status(400).json({ success: false, error: "Data invalida, vuelve a intentarlo" })
    }

    const response = await createProduct({ name, price, stock, category, description })

    if (!response.success) {
      return res.status(400).json(response)
    }

    res.json(response)
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

serverHttp.delete("/products/:id", async (req, res) => {
  const id = req.params.id
  const response = await deleteProduct(id)
  if (!response.success) {
    return res.status(400).json(response)
  }
  res.status(200).json(response)
})

serverHttp.patch("/products/:id", async (req, res) => {
  const id = req.params.id
  const body = req.body
  const response = await updateProduct(id, body)
  if (!response.success) {
    return res.status(400).json({ success: false, error: response.error })
  }
  res.json(response)
})

serverHttp.use((req, res) => {
  res.status(404).json({ success: false, error: "el recurso no se encuentra" })
})

const PORT = 50000

// 0 - 65656
serverHttp.listen(PORT, () => {
  console.log(`✅ Servidor http en escucha en el puerto http://127.0.0.1:${PORT}`)
  connectDb()
})