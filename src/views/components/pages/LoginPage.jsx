import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import Container from '../common/Container'
import Col from '../common/Col'
import { mediaQueries } from '../../../styles/mediaQueries'
import Title from '../common/Title'

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
  const { register, handleSubmit, errors } = useForm()
  const { t } = useTranslation()

  /* Si estamos logeados no hay necesidad de mostrar la pagina de login
  por lo cual redireccionamos */
  if (auth.isLoggedIn) return <Redirect to='/' />

  const onSubmit = (data) => {
    console.log(data)
  }

  // TODO: Separar los input en sus propios componentes (Input)
  return (
    <StyledLoginPage>
      <Helmet title={t('documentHeadTitles.loginPage')} />
      <Col sm={10} md={8} lg={5} className='m-auto'>
        <Title className='title mb-4'>Iniciar sesión</Title>
        <form
          className='needs-validation'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className='form-group'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='emailInput'>Correo Electrónico</label>
            <input
              name='email'
              type='email'
              className={`form-control ${errors.email && 'is-invalid'}`}
              id='emailInput'
              ref={register({
                required: 'Se requiere la dirección de correo electrónico',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Correo electrónico inválido',
                },
              })}
            />
            {errors.email && (
              <div className='invalid-feedback d-block'>
                {errors.email.message}
              </div>
            )}
          </div>

          <div className='form-group'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='passwordInput'>Password</label>
            <input
              name='password'
              type='password'
              className={`form-control ${errors.password && 'is-invalid'}`}
              id='passwordInput'
              ref={register({
                required: 'Se requiere la contraseña',
                minLength: {
                  value: 4,
                  message: 'La contraseña debe ser mínimo de 4 caracteres',
                },
              })}
            />
            {errors.password && (
              <div className='invalid-feedback d-block'>
                {errors.password.message}
              </div>
            )}
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
