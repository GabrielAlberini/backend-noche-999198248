interface Message {
  id: number,
  idUser: number,
  conten: string,
  timestamp?: Date
}

const validateMessage = (message: Message): boolean => {
  return true
}

const sendMessage = (message: Message) => {
  const valid = validateMessage(message)

  // { success: false, error: "Mensaje inválido" } ❌
  // { success: true, data: message } ✅
}

// const result = sendMessage()