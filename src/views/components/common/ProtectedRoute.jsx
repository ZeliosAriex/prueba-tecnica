import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

// Componente que nos permite proteger una ruta contra usuarios no autenticados
const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const auth = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
        return Component ? <Component {...props} /> : render(props)
      }}
    />
  )
}

export default ProtectedRoute
