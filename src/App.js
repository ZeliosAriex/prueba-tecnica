import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import MainContainer from './views/components/common/MainContainer'
import UserListPage from './views/components/pages/UserListPage'
import NavBar from './views/components/NavBar'
import NotFoundPage from './views/components/pages/NotFoundPage'
import ProtectedRoute from './views/components/common/ProtectedRoute'
import LoginPage from './views/components/pages/LoginPage'

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <ProtectedRoute path='/users' component={UserListPage} />
        <Route path='/not-found' component={NotFoundPage} />
        <Redirect exact from='/' to='/users' />
        <Redirect to='/not-found' />
      </Switch>
    </>
  )
}

export default App
