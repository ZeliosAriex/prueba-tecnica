import styled from 'styled-components'

const Nav = styled.nav.attrs(() => ({
  className: 'navbar navbar-expand-sm navbar-dark bg-dark',
}))`
  .logo {
    width: 2rem;
    margin-right: 0.75rem;
    user-drag: none;
    user-select: none;
  }

  a {
    user-select: none;
  }
`

export default Nav
