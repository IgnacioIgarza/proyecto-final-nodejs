# Curso de Back End con Node.JS de **TalentoTech**
## Proyecto final integrador
## Servidor API REST con capas Express


### Este proyecto es una API Rest básica conectada a una base de datos de Firebase para cargar productos y algunas características de ellos con Node.js.
### Para que funcione usé la información que me brindó el curso, ya que no tenía ningún conocimiento previo en el tema.

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor cuando se usa el modo desarrollo desarrollo.
- Configuración minimalista lista para usar.

---

## Instalación

Primero, instalar las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```
o
```bash
npm start
```
Este comando iniciará el servidor.





## Estructura del proyecto


| Carpeta | Archivo | Contenido |
|:-----|:-----|:-----|
|      | index.js | Punto de entrada del servidor |
|      | packege.json | Dependencias y scripts |
|      | REEADME.md | Documentación del proyecto |
| routes | product.route.js | Definición de rutas |
| controllers | product.controller.js | Lógica que responde a las rutas |
| services| product.sevice.js |Lógica de negocio reutilizable |
| models| product.model.js | Modelos de datos |
| config | db.js | Configuración de la base de datos |

---

## Rutas disponibles

### GET todos los productos: http://localhost:5000/api/products
### Muestra la lista de productos y sus características (Nombre, precio, stock, disponible)

### GET producto por id: http://localhost:5000/api/products/id
### Muestra el producto con ese id.

### POST: http://localhost:5000/api/products
### Ejemplo del Body:
### {
###     "nombre":"lapices-de-colores",
###     "precio":2000,
###     "stock":3,
###     "disponible":true
### }
### Carga a la lista el producto y sus características.

### DELETE: http://localhost:5000/api/products/id
### Borra el producto con ese id y sus características de la lista.

