# Proyecto Integrador: CRUD con Node.js y MySQL

## Descripción del Proyecto

En este proyecto, desarrollarás una plataforma de streaming usando Node.js y MySQL. La aplicación permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos relacional, utilizando el archivo trailerflix.json como referencia para diseñar el modelo de datos.


## Modelo de Base de Datos
El archivo trailerflix.json incluye propiedades como ID, título, categorías, géneros, resumen, temporadas, reparto y enlaces a trailers. Basado en la estructura del archivo trailerflix.json, se diseña una base de datos en MySQL llamada trailerflix con las siguientes tablas relacionales:

- **Contenidos**: Tabla principal con la información de películas y series.
- **Categorias**: Definirá si el contenido es una película o una serie.
- **Generos**: Almacenará los géneros como Ciencia Ficción, Fantasía, etc.
- **Actores**: Información sobre los actores principales de cada contenido.
- **Generos_contenidos**: Tabla intermedia entre la tabla Contenidos y Generos; para romper la relación muchos-muchos
- **Repartos**: Tabla intermedia que relacionará el contenido con los actores; o sea entre la tabla Contenidos y la tabla Actores; para romper la relación muchos-muchos.



### Descripción de Archivos ###

- **/app.js**: Archivo principal de la aplicación Node.js.
- **/conexion/database.js**: Configuración de la conexión a MySQL.
- **/models/**: Modelos de datos para las tablas en MySQL.
- **/routes/**: Definición de las rutas y endpoints del CRUD.
- **/controllers/**: Básicamente, donde se manejará la lógica de negocio y la interacción entre el usuario y los datos de la aplicación. En sintesis, los controladores se encargan de gestionar las peticiones que llegan a los endpoints, ejecutar la lógica correspondiente y enviar las respuestas adecuadas.

**/controllers/actoresControllers.js**: archivo que hará controlador para los actores donde se tiene funciones que permiten:

    * Obtener datos (listar actores) [getTodosLosActores]: función que busca en la BD y devuelve una lista con todos los actores almacenados.
    * Obtener un solo actor [getActorPorId]: función que busca en la BD un actor específico; por ejemplo, en este caso por su id,  y devuelve los datos de dicho actor.
    * Crear un nuevo actor [crearActor]: función que toma los datos de un nuevo actor desde el cuerpo de la petición (JSON), valida los datos, y los guarda en la BD.
    * Actualizar un actor [actualizaActor]: función que permite modificar los datos de un actor en caso que exista. Encontrando el actor por su id y actualizando los valores en la BD.
    * Eliminar un actor [eliminarActor]: función para eliminar un actor de la BD a traves de su id.


**/controllers/generosControllers.js**: archivo que hará controlador para los generos de los contenidos. En este caso lo utilizo con una única funcion:

   * Obtener generos [getGeneros]: funcion en la que al pasar un genero determinado en el endpoint devuelve todos los contenidos que tienen asociado dicho genero, encaso que corresponda o esté almacenado el mismo


**/controllers/contenidosControllers.js**: archivo que hará controlador para los contenidos donde se tiene funciones que permiten:

   * Obtener datos (listar contenidos) [getTodosLosContenidos]: función que busca en la BD y devuelve una lista con todos los contenidos almacenados.
   * Obtener solo un contenido [getContenidoPorId]: función que busca en la BD un contenido específico; en este caso por su id, y devuelve los datos de dicho contenido.
   * Obtener contenido [getContenidoPorTitulo]: función que busca en la BD un contenido específico; en este caso por su ititulo, y devuelve los datos de dicho contenido. La busqueda (filtro) del titulo puede coincidir total o parcialmente para que retorne el contenido valido
   * Obtener datos (listar contenidos) [getContenidosPorCategoria]: función en donde se especifica una de las categorias asociada al contenido y devuelve una lista con todos los contenidos almacenados que cumpla con dicha condición. Las categorias son 2 únicamente: "Serie" o "Pelicula"; en cualqueir otro caso se notifica sobre esto
   * Crear un nuevo contenido [crearContenido]: función que toma los datos de un nuevo contenido desde el cuerpo de la petición (JSON), valida los datos, y los guarda en la BD. 
   * Actualizar un contenido [actualizarContenido]: función que permite modificar los datos de un contenido en caso que exista. Encontrando el contenido por su id y actualizando los valores en la BD.
   * Eliminar un actor [eliminarContenido]: función para eliminar un contenido de la BD a traves de su id. Lo primero de todo es suprimir los vinculos existentes con las tablas involucradas, de lo contrario no es posible poder eliminar el contenido en cuestion
   * Actualizar un contenido [actualizarTemporada]: función que permite modificar un atributo particular de la tabla Contenidos. En este caso el valor a actualizar es el de temporadas; que se hará efectivo siempre y cuando la categoria del contenido que se desea actualizar corresponda a una Serie; en otro caso se indicará que no es posible
   

       