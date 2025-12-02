# Ejercicio CRUD Básico con MongoDB --- Books Edition

## Objetivo

Practicar las operaciones CRUD usando una colección de libros.

## Estructura del Documento `book`

-   title (string)
-   author (string)
-   genre (string)
-   year (number)
-   stock (number)

## 1. Crear Base de Datos y Colección

``` js
use library;
```

## 2. Luego en todas las peticiones incorporar

``` js
db.books.metodo();
```

## Consigna

1.  Insertar 5 libros nuevos.
2.  Consultar por género y por rango de años.
3.  Actualizar el stock de 2 libros y los datos completos de 1 libro.
4.  Eliminar 1 libro por título.
5.  Entregar los comandos en un archivo .md.
