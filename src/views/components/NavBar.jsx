import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './common/Nav'

const NavBar = () => (
  <Nav>
    <Link className='navbar-brand h1' to='/'>
      Home
    </Link>
  </Nav>
)

export default NavBar
