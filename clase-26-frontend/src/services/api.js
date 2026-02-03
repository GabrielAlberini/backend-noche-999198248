const BASE_API = "http://localhost:50000/products"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTgyN2NjMmExOTMwYjkxNmEyODYwNDciLCJ1c2VybmFtZSI6Ik51ZXZvIHVzdWFyaW8iLCJlbWFpbCI6ImdhYmlhbGJlcmluaTczM0BnbWFpbC5jb20iLCJpYXQiOjE3NzAxNTk2MTYsImV4cCI6MTc3MDE2MzIxNn0.sTeTZS7njm3W9o9sJCYI06Mq1CaW3J-d2Q6haVAKqmc"

const getProducts = async () => {
  const res = await fetch(`${BASE_API}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN
    }
  })

  return res
}

const createProduct = async (productData) => {
  const res = await fetch(`${BASE_API}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  })

  return res
}

const updateProduct = () => { }

const deleteProduct = () => { }

export { getProducts, createProduct, updateProduct, deleteProduct }