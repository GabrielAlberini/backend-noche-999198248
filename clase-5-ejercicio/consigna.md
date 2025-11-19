# Ejercicio práctico: Sistema de Mensajes de Chat (TypeScript + Objetos + Backend)

## Enunciado

Vas a simular una ruta de backend que recibe datos de un mensaje de chat para guardarlo.

---

### 1. Crear un type llamado `Message` con estas propiedades:
- `id: number`
- `idUser: number`
- `content: string`
- `timestamp?: Date` (opcional)

---

### 2. Crear una función `validateMessage(message: Message)` que cumpla:
Retorna **true** si:
- `idUser` es un número mayor a 0
- `content` tiene al menos **1 carácter** y no supera los **200 caracteres**
Retorna **false** si algo está mal.

---

### 3. Crear una función `sendMessage(message)` que:
- Usa `validateMessage`
- Si el mensaje es válido, retorna:
```ts
{ success: true, data: message }
```
- Si es inválido, retorna:
```ts
{ success: false, error: "Mensaje inválido" }
```

---

### 4. Probar la función con:
- Un mensaje válido
- Un mensaje inválido

---

## Ejemplo de uso

```ts
// Ejemplo de mensaje válido
const validMessage = {
  id: 1,
  idUser: 42,
  content: "Hola, ¿cómo estás?",
};

// Ejemplo de mensaje inválido
const invalidMessage = {
  id: 2,
  idUser: 0,
  content: "",
};
```
