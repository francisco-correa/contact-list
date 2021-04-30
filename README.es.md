## Contact List Management

Agenda de contactos que permite realizar diferentes funcionalidades con el método CRUD, la agenda de llama **panchoCorrea**

## *GET*
* Obtener agenda completa
* https://assets.breatheco.de/apis/fake/contact/agenda/

* Obtener una agenda particular
* https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea

* Obtener el id de un contacto específico
* https://assets.breatheco.de/apis/fake/contact/id


## *POST*
* Crear un nuevo contacto
* https://assets.breatheco.de/apis/fake/contact/
* Body
```javascript
	Body {
					full_name: Francisco Correa,
					email: fcorrea.fernandez@gmail.com,
					phone: 923456789,
					address: Hola 123,
					agenda_slug: "panchoCorrea"
				};
```

## *PUT*
* Actualizar un nuevo contacto por medio de su "id"
* https://assets.breatheco.de/apis/fake/contact/id

```javascript
	Body {
					full_name: Francisco Correa,
					email: fcorrea.fernandez@gmail.com,
					phone: 923456789,
					address: Hola 123,
					agenda_slug: "panchoCorrea"
				};
```

## *DELETE*
* Eliminar un contacto por medio de su "id"
* https://assets.breatheco.de/apis/fake/contact/${id}

______________________________________________________________________

# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact Managment Application

Tecnologías: HTML, CSS, JS, React, React Router and Context.

¡Hola! Es hora de empezar a hacer aplicaciones frontales profesionales. Esta vez
Crearemos una pequeña aplicación de gestión de contactos que permitirá a los usuarios:
Leer, crear, actualizar y eliminar contactos. 

Puedes usar este gif:
[Compruébalo aquí!](https://github.com/breatheco-de/exercise-contact-list/blob/master/preview.gif?raw=true)

O bien estas imágenes:
[Imagen 1](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-1.png?raw=true) y
[Imagen 2!](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-2.png?raw=true)


***Por favor, use el Contexto para este proyecto:*** La plantilla viene con el Contexto configurado. Verifique la carpeta ```/ store```.

### ¿Como empezar?

Clona el repositorio con el boilerplate, no contiene funcionalidades reales
pero tiene 99.99% del HTML/CSS que necesitarás para el proyecto,
Te permite centrarte en la funcionalidad.

***Nota: necesitarás codificar todas las funcionalidades.***

### El proyecto se divide en:

#### Dos vistas diferentes:

1. Contacto: Contiene la lista de contactos.
2. AddContact: es solo un formulario utilizado para crear o actualizar contactos.

#### Un componente:
Tarjeta de contacto: muestra solo un contacto.

## TO-DO funcionalidades

- Debes agregar el código necesario para que su aplicación maneje los contactos, específicamente:
    - crea,
    - actualiza,
    - y elimina.
- (Opcional) Solicite al usuario una confirmación antes de eliminarla, use el componente modal para eso.

Todas las funcionalidades deben implementarse en el objeto ```actions``` (store.js).

Sugerencia: comience con algún contenido ficticio en la tienda (store.js).

```Fetch``` la data desde la API: https://assets.breatheco.de/apis/fake/contact/

Sugerencia: use Postman para probar los puntos finales de la API antes de codificar.

## Pasos para instalar este proyecto

##### 1. Clona el repositorio
```
$ git clone https://github.com/breatheco-de/exercise-contact-list-context.git
```
##### 2. Instala el /node_modules
```
$ npm install
```
##### 3. Ejecutar el servidor de desarrollo webpack.
```
$ npm run start
```

¡Eso es! Comience a codificar su aplicación React :)
