![Logo](https://flexxus.com.ar/wp-content/uploads/elementor/thumbs/logo-flexxus-header-pv8liah8khv6xfynvz03so9v98sk2tr50hts9we7dk.png)
# Resolución de Prueba Técnica I+D Team - CRUD de Usuarios en React

Esta es mi resolución de la prueba técnica para desarrolladores FullStack de Flexxus! 
En este proyecto, me desafiaron a construir un CRUD de usuarios utilizando React. 


`Sigue las instrucciones a continuación para comenzar`.


## Instrucciones

### 1. Clon del Repositorio

Deberás seguir las instrucciones de github, para clonar el repositorio en tu maquina de manera local.

### 2. Inicializar el proyecto

Entra al directorio del proyecto, dentro del repositorio tendrás `tres carpetas`:

#### CARPETA - DOCS
En esta carpeta encontrarás ` los ejercicios de algoritmos y estructuras de datos en JavaScript resueltos`, con sus respectivos test, también tendrás un readme.md con las instrucciones del mismo.

Además tendrás el archivo `consultas.sql` con una lista de `consultas SQL` resueltas.

#### CARPETA - API

Tendras disponible un `json-server` con una lista de usuarios ficticios. 

Para inicializar el servidor deberas ejecutar los siguientes comandos:

```bash
cd ./api
npm install
npm run server
```
Por defecto se inicializará en el puerto 4000, por favor levanta el server para poder trabajar con la base de datos.

#### CARPETA - CLIENT

Dentro de la misma esta el frontend en React creado con Vite.
Para inicializarlo realiza los siguientes pasos:

```bash
cd ./client
npm install
npm run dev
```
Por defecto se inicializará en el puerto 3000.


### 3. Normas de desarrollo pedidas

Desarrollar la aplicación siguiendo las especificaciones proporcionadas. Asegúrate de seguir las siguientes normas de desarrollo:

- Utiliza React para construir la interfaz de usuario.  ✔
- La aplicación debe ser un CRUD completo, permitiendo crear, leer, actualizar y eliminar usuarios. ✔
- Implementa validaciones en los formularios para garantizar la integridad de los datos. ✔
- Utiliza componentes funcionales y hooks siempre que sea posible.✔
- Escribe código limpio y legible. Utiliza nombres de variables descriptivos y sigue las convenciones de estilo de código de JavaScript y React.✔
- Gestiona el estado de la aplicación de manera eficiente y evita el uso excesivo de prop drilling.✔
- Comenta tu código cuando sea necesario para explicar partes complejas o importantes del mismo.✔
- Utiliza React Context o Redux para el estado global de la aplicación.✔
- Recomendamos utilizar UUID para la generación de indentificadores únicos de los registros de los usuarios.✔
- Se debe respetar el diseño en Figma que se les adjunto en la sección de [recursos](#sources).✔
- Se debe utilizar la librería antd y css/less/sass en caso de ser necesario.✔
- Recomendamos reutilizar la mayor cantidad de componentes posibles, y evitar el codigo repetitivo.✔

## 4. Requerimientos del software pedidos

Es necesario simular un tiempo de carga entre las peticiones con un setTimeOut, y mostrar un Loader en los componentes afectados.✔

- Listar usuarios.✔
- Crear usuarios.✔
- Editar usuarios.✔
- Eliminar usuarios.✔
- Buscar por nombre o apellido por coincidencia.✔
- Filtrar por el estado del usuario (active/inactive).✔
- Paginado de registros utilizando limit & offset.✔

### 5. A tener en cuenta

- Disfrute mucho del desafío, no tenia conocimientos previos de `Ant Desing` o `Json-server` así que el desafío fue mayor, espero haber satisfecho las expectativas y haber cumplido con el diseño proporcionado de figma, lo unico que no encontre como hacer, es darle la misma apariencia a los botones de paginación de la tabla.
- A mi parecer falto mostrar algún mensaje o alerta confirmando o no si la acción se realizo (crear usuario, editar usuario, eliminar usuario), no se realizo porque en el diseño de figma no se incluyo, y por temas de tiempo no se implemento pero si se muestra un loading con un setTimeout de 1s.
- Se utilizó redux solo para mantener a los usuarios, la paginación, filtro y un isLoading para mostrar la tabla, que a su vez se trabaja con un hook.
- Para crear, editar o eliminar un usuario se utilizaron hooks para el manejo de los modales, los state estan dentro de los hooks asi como tambien las peticiones, lo realice así para no tener que manejar todo con redux, pero se podría haber separado las peticiones asi como lo hice para obtener los usuarios y aplicar el filtro.
- Se utilizo patron adaptador para uuid, por temas de tiempo no se utilizo para axios pero si se implemento una configuración inicial del mismo.
- Tener en cuenta que esta activado el modo estricto de react (se disparan useEffect dos veces).

<a id="sources"></a>
## Recursos 
[🎨 Link al diseño de Figma](https://shorturl.at/rwxV4)

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
