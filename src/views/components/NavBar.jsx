import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import logo from '../../resources/images/logo.svg'
import signOutIcon from '../../resources/images/box-arrow-right.svg'
import hamburger from '../../resources/images/hamburger.svg'
import { startLogoutUser } from '../../store/actions/auth'
import useWindowSize from '../hooks/windowSize'
import sizes from '../../styles/sizes'
import {
  activateMobileNavbar,
  deactivateMobileNavbar,
  movileNavbarToggleExpand,
} from '../../store/actions/ui'
import { ReactComponent as SpanishFlag } from '../../resources/images/spanish-flag.svg'
import { ReactComponent as EnglishFlag } from '../../resources/images/english-flag.svg'
import Button from './common/Button'

const StyledNavBar = styled.nav.attrs(() => ({
  className: 'navbar navbar-expand-sm navbar-dark',
}))`
  background-color: ${(p) => p.theme.primary};

  .logo {
    width: 2rem;
    margin-right: 0.75rem;
    user-drag: none;
    user-select: none;
  }

  .navbar-brand {
    display: flex;
  }

  .navbar-toggler {
    border: 0;

    .icon {
      display: block;
      width: 2rem;
    }
  }

  .navbar-nav li {
    margin: 0.5rem 0;
  }

  .btn-sign-out {
    display: flex;
    align-items: normal;

    .icon {
      width: 1.25rem;
      margin-right: 0.5rem;
    }
  }

  a {
    user-select: none;
  }

  .flag {
    width: 1.5rem;
  }

  .lang-changer {
    margin-right: ${(p) => (p.auth.isLoggedIn ? 2 : 0)}rem;

    button {
      padding: 0;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  .expand {
    display: flex;
  }
`

const NavBar = () => {
  const auth = useSelector((state) => state.auth)
  const ui = useSelector((state) => state.ui)
  const [width] = useWindowSize()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    // El tamaño en pixeles donde queremos activar el Navbar móvil (no inclusive)
    const breakpoint = sizes.sm.split('px')[0]

    if (width !== 0) {
      if (width < breakpoint && !ui.mobileNavbar.active)
        dispatch(activateMobileNavbar())
      else if (width > breakpoint && ui.mobileNavbar.active)
        dispatch(deactivateMobileNavbar())
    }
  })

  const handleLogOutClick = () => {
    dispatch(startLogoutUser())
  }

  const handleMobileMenuToggle = () => {
    dispatch(movileNavbarToggleExpand())
  }

  const renderLogOutButton = () =>
    auth.isLoggedIn ? (
      <Button
        onClick={handleLogOutClick}
        className='btn btn-secondary btn-sm btn-sign-out'
      >
        <img className='icon' src={signOutIcon} alt='Sign Out' />
        {t('navbar.logOutBtn')}
      </Button>
    ) : null

  const switchLanguage = (lang) => i18n.changeLanguage(lang)

  const getNavbarCollapseClasses = () => {
    const expand = ui.mobileNavbar.expanded ? 'expand' : ''

    return `navbar-collapse collapse ${expand}`
  }

  const renderNavLinks = () => (
    <ul className='navbar-nav mr-auto'>
      <li>
        <NavLink className='nav-item nav-link' to='/users'>
          {t('navbar.navLinks.users')}
        </NavLink>
      </li>

      <li>
        <NavLink className='nav-item nav-link' to='/cualquier-cosa'>
          {t('navbar.navLinks.nonexistent')}
        </NavLink>
      </li>
    </ul>
  )

  const renderLangSwitchers = () => (
    <div className='lang-changer'>
      <Button
        onClick={() => switchLanguage('es')}
        className='btn btn-link'
        title={t('navbar.languageSelectors.switchToSpanish')}
      >
        <SpanishFlag className='flag' />
      </Button>
      <Button
        onClick={() => switchLanguage('en')}
        className='btn btn-link'
        title={t('navbar.languageSelectors.switchToEnglish')}
      >
        <EnglishFlag className='flag' />
      </Button>
    </div>
  )

  return (
    <StyledNavBar auth={auth}>
      <Link className='navbar-brand' to='/'>
        <img className='logo' src={logo} alt='Logo' />
        {t('navbar.mainTitle')}
      </Link>
      <Button className='navbar-toggler' onClick={handleMobileMenuToggle}>
        <img className='icon' src={hamburger} alt='Mobile menu toggler' />
      </Button>
      <div className={getNavbarCollapseClasses()}>
        {renderNavLinks()}
        {renderLangSwitchers()}
        {renderLogOutButton()}
      </div>
    </StyledNavBar>
  )
}

export default NavBar
