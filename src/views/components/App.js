import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserListPage from './pages/UserListPage'
import NavBar from './NavBar'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './common/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import UserDetailsPage from './pages/UserDetailsPage'

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <ProtectedRoute path='/users/:id' component={UserDetailsPage} />
        <ProtectedRoute path='/users' component={UserListPage} />
        <Route path='/not-found' component={NotFoundPage} />
        <Redirect exact from='/' to='/users' />
        <Redirect to='/not-found' />
      </Switch>
    </>
  )
}

export default App
