import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './common/Nav'
import logo from '../../resources/images/logo.svg'
import { startLogoutUser } from '../../store/actions/auth'

const NavBar = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogOutClick = () => {
    dispatch(startLogoutUser())
  }

  const displayLogOutButton = () =>
    auth.isLoggedIn ? (
      <button
        onClick={handleLogOutClick}
        className='btn btn-secondary btn-sm'
        type='button'
      >
        Cerrar Sesión
      </button>
    ) : null

  return (
    <Nav>
      <Link className='navbar-brand' to='/'>
        <img className='logo' src={logo} alt='Logo' />
        Prueba Técnica
      </Link>
      <div className='navbar-collapse collapse' />

      {displayLogOutButton()}
    </Nav>
  )
}

export default NavBar
