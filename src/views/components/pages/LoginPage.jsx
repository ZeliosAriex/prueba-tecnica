import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Col from '../common/Col'
// import { useForm } from 'react-hook-form'

const StyledLoginPage = styled(Container).attrs({
  className: 'mt-4',
})`
  .title {
    font-variant-caps: all-small-caps;
  }
`

const LoginPage = () => {
  const auth = useSelector((state) => state.auth)
  // const { register } = useForm()
  const { t } = useTranslation()

  /* Si estamos logeados no hay necesidad de mostrar la pagina de login
  por lo cual redireccionamos */
  if (auth.isLoggedIn) return <Redirect to='/' />

  return (
    <StyledLoginPage>
      <Helmet title={t('documentHeadTitles.loginPage')} />
      <Col sm={10} md={8} lg={6} className='m-auto'>
        <h1 className='title'>Login</h1>
        <form>
          <div className='form-group'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <small id='emailHelp' className='form-text text-muted'>
              Nunca
            </small>
          </div>
        </form>
      </Col>
    </StyledLoginPage>
  )
}

export default LoginPage
