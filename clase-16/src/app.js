// 1 - crear un servidor http ✅
// 2 - poner en escuchar (3001) ✅
// 3 - habilitar json en el backend
// 4 - habilitar politicas CORS ✅
// 5 - definir ruta y método
// 6 - conectar o habilitar nuestro servicio de mail

import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001

const status = { status: "ok" }

app.get("/", (req, res) => {
  res.json(status)
})

// POST - /send-email ✅
// POST - /purchase
// POST - /auth/register
// Enviando un correo electrónico

// send-help
// send-client
// send-subcription

// generar una conexión con un provedor de emails
// enviarlo
// https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gabialberini733@gmail.com",
    pass: "levk oejw fkhp orai"
  }
})

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body
  try {
    await transporter.sendMail({
      from: "Pagina web",
      to: "gabialberini733@gmail.com",
      subject: "Nuevo mensaje desde MercadoLiebre",
      html: `
        <h3>Nuevo mensaje de ${name}</h3>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `
    })

    res.json({
      success: true,
      message: "Correo enviado con éxito"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: "Error interno del servidor" })
  }
})

app.use((req, res) => {
  res.status(404).json({ error: "recurso o acción no encontrada" })
})

app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
})
