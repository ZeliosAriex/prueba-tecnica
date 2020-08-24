## Prueba técnica de Front End de LaLiga
[![Netlify Status](https://api.netlify.com/api/v1/badges/dbb6340b-5f08-47c2-b99a-ddcc60ac08b4/deploy-status)](https://app.netlify.com/sites/prueba-tecnica-omar/deploys)

[DEMO](https://prueba-tecnica-omar.netlify.app)

### Instalación / Configuración

Lo primero es instalar las dependencias del proyecto ejecutando el
siguiente comando:

```bash
# Con npm
npm install

# Con Yarn
yarn
```

Una vez instaladas las dependencias pasamos a configurar las variables 
de entorno, en la base raíz del proyecto encontraremos un archivo llamado
`.env.example` haremos una copia de este y lo renombraremos a `.env`, a 
continuación paso a explicar para que sirve cada variable de entorno

### Variables de entorno

* `REACT_APP_API_BASE_URL`: La URL base del endpoint donde haremos las
llamadas rest en nuestro caso pondremos `https://reqres.in/api`
* `EXTEND_ESLINT`: Nos permite extender la configuración de eslint que 
create-react-app lleva integrado
* `REACT_APP_API_DELAY`: Especifica un tiempo en segundos de delay para la api, esto nos puede servir para simular que el servidor tarda en devolver la respuesta y ver como responde la aplicación

### Ejecución

Para iniciar el proyecto asegurarse de haber creado el archivo de entorno `.env`, vease el apartado anterior, una vez creado y configurado lanzar el siguiente comando:

```bash
# Con npm
npm start

# Con Yarn
yarn run start
```

Se iniciará el servidor de desarrollo en `http://localhost:3000` y podremos acceder a la app desde dicha URL

### Estructura de archivos del proyecto

A continuación explicaré para que sirve cada directorio que se encuentra dentro de la carpeta raíz de código `src`. Dentro de cada carpeta podemos encontrar un `index.js` que normalmente suele agrupar la funcionalidad de dicha carpeta para ser fácilmente importada desde otros módulos

#### i18n

Aquí podemos encontrar en el archivo `index.js` la inicialización de la librería de internacionalización que nos servirá para poder cambiar de idioma y poder tener una mejor gestión de los textos que se usan en el proyecto, cada idioma tiene su propio archivo JSON

#### resources

Todo lo relacionado con iconos, imágenes, vectores, fuentes, etc. Aunque realmente lo uso para guardar los vectores que luego uso en la aplicación

#### store

El corazón del estado de nuestra aplicación, dentro podemos encontrar subcarpetas a parte del archivo `index.js` que se encarga de configurar e inicializar la store. He decidido separar los conceptos cada uno con su carpeta correspondiente, lo que nos permite tener un proyecto fácil de escalar a largo plazo, a continuación explico un poco en detalle las sub-carpetas que existen y su propósito:

* `actions`: encontramos los `action types` y `action creators` de cada store por separado.

*  `reducers`: contiene los reducers cada uno en su archivo, luego en `index.js` los combino
* `sagas`: todo lo relacionado con `side effects` se encuentra aquí, en cada subcarpeta dependiendo de su naturaleza encontramos el archivo `index.js` que exporta el `rootSaga` y luego los watchers.
* `util`: sirve para reutilizar parte de código que se usan en varios archivos de sagas

#### styles

El proyecto usa Bootstrap v4 modular (importamos solo lo que vayamos a usar) esto lo podemos ver en el archivo `index.scss`, los archivos `mediaQueries.js` y `sizes.js` me van  a servir para luego poder tener unificados los breakpoints que usaré dentro de cada styled-component.

No he querido abusar demasiado de los estilos de Bootstrap y he usado los míos propios en algunos componentes mediante styled-components, ya para crear un estilo nuevo o modificar alguno de Bootstrap.

El archivo `theme.js` me sirve para definir las variables de tema que luego se usaran como propiedades dentro de styled-components, también hago uso de la librería `polished` para crear colores respecto a otros, una funcionalidad que simula la que ya existe en SASS.

#### views

Todo lo relacionado con vistas, podemos encontrar componentes, páginas y hooks propios

### Funcionalidades extra

#### Internacionalización

Mediante las librerías de `i18next` y `react-i18next` he podido añadir 
funcionalidad multi-idioma en la aplicación además de poder gestionar
todos los textos desde un lugar centralizado (véase los archivos JSON
situados en `src/i18n`)

#### Validación de formularios

He usado la librería `react-hook-form` ya que minimiza el número de renders
que se necesitan cuando se hacen cambios en los formularios además de poder
aplicar validación en estos de manera sencilla, usa hooks para el registro
de los distintos inputs y también para la gestión de los errores

#### Notificaciones mediante Toasts

Cada vez que se actualiza, elimina un usuario o directamente para informar sobre errores aparecerá en la esquina superior derecha un Toast con información

### 404

Una simpática pagina Not Found

### Dependencias extra

#### Normales
1. `react-toastify`: Componente para mostrar notificaciones
2. `i18next`: Librería de internacionalización (i18n)
3. `react-i18next`: Integración con React de la librería de internacionalización (i18n)
4. `react-helmet-async`: Document head manager para React (versión mantenida de react-helmet)
5. `react-hook-form`: Me permite aplicar validación y uso de formularios mediante hooks, de manera eficiente
6. `react-loading-sekeleton`: Sirve para poder renderizar componentes que representen el estado de carga en curso
7. `lodash.debounce`: Solo es una función que me permite limitar la frecuencia en que una función se puede disparar o ejecutar
8. `polished`: Toolset de funciones para crear estilos

#### Desarrollo

1. `husky`: Me permite modificar mis Git Hooks de manera sencilla

