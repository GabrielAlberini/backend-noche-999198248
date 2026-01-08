import { Product } from "../models/product.model.js"

const getProducts = async () => {
  try {
    const products = await Product.find().sort({ _id: -1 })
    return { sucess: true, data: products }
  } catch (error) {
    return { success: false, error: "Error al traer los productos" }
  }
}

const createProduct = async (data) => {
  try {
    const createdProduct = await Product.create(data)
    return { success: true, data: createdProduct }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

const updateProduct = async (id, updates) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true })
    return { success: true, data: updatedProduct }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    return { success: true, data: deletedProduct }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export { getProducts, createProduct, updateProduct, deleteProduct }