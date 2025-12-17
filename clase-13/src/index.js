import { getProducts } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"

// servidor http
const app = express()
app.use(cors())

// callback
app.get("/products", async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

// 0 - 65656
app.listen(50000)