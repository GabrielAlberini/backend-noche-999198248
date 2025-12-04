# Actividad de Práctica – Consultas en MongoDB (Movies)

## Dataset: movies.json
Importar dataset.

## Consignas (10 Ejercicios)

### 1. Insertar todas las películas (Create)
Importá el archivo con mongoimport.

### 2. Buscar todas las películas con rating mayor a 8.5


### 3. Obtener las películas estrenadas entre 1995 y 2010
Usar `$gte` y `$lte`.

### 4. Buscar películas cuyo género sea “Sci-Fi” o “Action”
Usar `$or`.

### 5. Buscar películas dirigidas por directores cuyo nombre empiece con "J"
Usar `$regex` + `$options`.

### 6. Listar películas que tengan rating entre 8 y 9 y sean Sci-Fi
Usar `$and` + `$gt` + `$lt`.

### 7. Mostrar solo `title` y `rating` de todas las películas
Usar proyección `{ title: 1, rating: 1, _id: 0 }`.

### 8. Ordenar todas las películas por rating descendente
Usar `sort({ rating: -1 })`.

### 9. Traer las primeras 3 películas ordenadas por año ascendente
Usar `sort({ year: 1 })` + `limit(3)`.

### 10. Obtener la segunda página con 4 películas por página
Usar `skip(4)` + `limit(4)`.

## Bonus CRUD

### Update
Actualizar el rating de "Avatar" a 8.0.

### Delete
Eliminar películas anteriores a 1995.
