import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import Col from '../common/Col'
import { mediaQueries } from '../../../styles/mediaQueries'
import Title from '../common/Title'
// import { useForm } from 'react-hook-form'

const StyledLoginPage = styled(Container).attrs({
  className: 'mt-5',
})`
  .title {
    text-align: center;
  }

  button[type='submit'] {
    display: block;
    width: 100%;
  }

  @media ${mediaQueries.sm} {
    margin-top: 0;
    button[type='submit'] {
      display: inline-block;
      width: auto;
    }
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
      <Col sm={10} md={8} lg={5} className='m-auto'>
        <Title className='title mb-4'>Iniciar sesión</Title>
        <form>
          <div className='form-group'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='emailInput'>Email address</label>
            <input type='email' className='form-control' id='emailInput' />
          </div>

          <div className='form-group'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='passwordInput'>Password</label>
            <input
              type='password'
              className='form-control'
              id='passwordInput'
            />
          </div>

          <button type='submit' className='btn btn-primary mt-4'>
            Submit
          </button>
        </form>
      </Col>
    </StyledLoginPage>
  )
}

export default LoginPage
