# Ejercicio de Base de Datos - Biblioteca

## Objetivo
Diseñar y practicar operaciones CRUD en MySQL utilizando un sistema simple de biblioteca con **3 entidades**.

---

## Contexto
Una biblioteca necesita organizar la información de sus socios, los libros disponibles y los préstamos realizados.  
Tu tarea será **crear la base de datos y las tablas necesarias**, y luego realizar operaciones CRUD para simular el funcionamiento del sistema.

---

## Entidades
1. **Socios**  
   - Datos básicos de las personas registradas en la biblioteca (nombre, teléfono).
2. **Libros**  
   - Información de cada libro (título, autor, género).
3. **Préstamos**  
   - Registro de los préstamos realizados (fecha de inicio, fecha de devolución, relación con socio y libro).

---

## Consigna

1. **Crear la base de datos** llamada `biblioteca`.  
2. **Definir las tablas** correspondientes a las entidades mencionadas, con sus claves primarias y relaciones.  

3. **Insertar datos de prueba**:  
   - Al menos 3 socios.  
   - Al menos 5 libros.  
   - Registrar al menos 5 préstamos en total.

4. **Realizar consultas (SELECT)** que permitan:  
   - Listar todos los socios.  
   - Listar todos los libros.  
   - Mostrar los préstamos realizados con el nombre del socio y el título del libro.

5. **Actualizar (UPDATE)** algún dato de un socio (por ejemplo, su teléfono).  

6. **Eliminar (DELETE)** un préstamo y verificar que ya no aparece en los resultados.  