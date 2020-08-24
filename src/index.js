import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import theme from './styles/theme'
import createStore from './store'
import './styles/index.scss'
import './i18n'
import { authCheck } from './store/actions/auth' // Configuramos la i18n

// Store centralizado de redux
const store = createStore()

/* Hay que comprobar la autenticación lo antes posible, de lo contrario las rutas
   no procesarán correctamente el estado de autenticación al no estar actualizado */
store.dispatch(authCheck())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Helmet
              titleTemplate='%s | Prueba Técnica'
              defaultTitle='Prueba Técnica'
            />
            <App />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
