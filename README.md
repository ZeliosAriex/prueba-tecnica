## Prueba técnica de Front End de LaLiga
[![Netlify Status](https://api.netlify.com/api/v1/badges/dbb6340b-5f08-47c2-b99a-ddcc60ac08b4/deploy-status)](https://app.netlify.com/sites/prueba-tecnica-omar/deploys)

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

### Funcionalidades extra

#### Internacionalización

Mediante las librerías de `i18next` y `react-i18next` he podido añadir 
funcionalidad multidioma en la aplicación ademas de poder gestionar
todos los textos desde un lugar centralizado (véase los archivos json 
situados en `src/i18n`)

#### Validación de formularios

He usado la librería `react-hook-form` ya que minimiza el número de renders
que se necesitan cuando se hacen cambios en los formularios además de poder
aplicar validación en estos de manera sencilla, usa hooks para el registro
de los distintos inputs y tambien para la gestión de los errores

### Dependencias extra

#### Normales
1. react-toastify: Componente para mostrar notificaciones
2. i18next: Librería de internacionalización (i18n)
3. react-i18next: Integración con react de la librería de internacionalización (i18n)
4. react-helmet: Document head manager para react
5. react-hook-form: Me permite aplicar validación y uso de formularios mediante hooks, de manera eficiente

#### Desarrollo

1. husky: Me permite modificar mis Git Hooks de manera sencilla
