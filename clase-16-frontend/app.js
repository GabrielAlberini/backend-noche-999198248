const $form = document.getElementById("contactForm")
const $response = document.getElementById("response")
const $name = document.getElementById

const API_BASE = "http://localhost:3001"

const sendEmail = async (e) => {
  $response.classList.remove("error")
  $response.classList.remove("success")
  $response.textContent = ""
  try {
    e.preventDefault()

    const dataForm = {
      name: $form.name.value,
      email: $form.email.value,
      message: $form.message.value
    }

    const res = await fetch(`${API_BASE}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataForm)
    })

    res.ok
      ? $response.classList.add("success")
      : $response.classList.add("error")
    res.ok
      ? $response.textContent = "Mensaje enviado con éxito"
      : $response.textContent = "Fallo al enviar el correo electrónico"
    $form.reset()
  } catch (e) {
    $response.classList.add("error")
    $response.textContent = "Error al conectarse con el servicio de envio de correos electronicos"
  }
}

$form.addEventListener("submit", sendEmail)