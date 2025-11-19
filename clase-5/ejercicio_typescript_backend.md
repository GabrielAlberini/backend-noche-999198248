# Ejercicio práctico (TypeScript + Objetos + Backend)

## Enunciado

Vas a simular una ruta de backend que recibe datos de un usuario para
registrarse.

------------------------------------------------------------------------

### 1. Crear un type llamado `User` con estas propiedades:

-   `id: number`
-   `email: string`
-   `password: string`
-   `role?: string` (opcional)

------------------------------------------------------------------------

### 2. Crear una función `validateUser(user: User)` que cumpla:

Retorna **true** si:

-   `email` contiene un `@`
-   `password` tiene al menos **4 caracteres**

Retorna **false** si algo está mal.

------------------------------------------------------------------------

### 3. Crear una función `registerUser(user)` que:

-   Usa `validateUser`
-   Si el usuario es válido, retorna:

``` ts
{ success: true, data: user }
```

-   Si es inválido, retorna:

``` ts
{ success: false, error: "Datos inválidos" }
```

------------------------------------------------------------------------

### 4. Probar la función con:

-   Un usuario válido
-   Un usuario inválido
