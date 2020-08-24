import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import Col from '../common/Col'
import { mediaQueries } from '../../../styles/mediaQueries'
import Title from '../common/Title'
import { startLoginUser } from '../../../store/actions/auth'
import loginIcon from '../../../resources/images/people.svg'
import MainContainer from '../common/MainContainer'

const StyledLoginPage = styled(MainContainer).attrs({
  className: 'mt-5 mb-5',
})`
  .page-icon {
    width: 4rem;
    display: block;
    margin: 0 auto 1rem auto;
    user-drag: none;
  }

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
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()
  const { t } = useTranslation()
  /* Si estamos logeados no hay necesidad de mostrar la pagina de login
  por lo cual redireccionamos */
  if (auth.isLoggedIn) return <Redirect to='/' />

  const onSubmit = ({ email, password }) => {
    dispatch(startLoginUser(email, password))
  }

  // Para la validación de los campos del formulario
  const passwordMinLength = 4
  const fieldOptions = {
    email: {
      required: t('pages.login.forms.email.errors.required'),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('pages.login.forms.email.errors.invalid'),
      },
    },
    password: {
      required: t('pages.login.forms.password.errors.required'),
      minLength: {
        value: passwordMinLength,
        message: t('pages.login.forms.password.errors.minValue', {
          passwordMinLength,
        }),
      },
    },
  }

  // TODO: Separar los input en sus propios componentes (Input)
  return (
    <StyledLoginPage>
      <Helmet title={t('documentHeadTitles.loginPage')} />
      <Col sm={10} md={8} lg={5} className='m-auto'>
        <img className='page-icon' src={loginIcon} alt='Lock' />
        <Title className='title mb-5'>{t('pages.login.title')}</Title>
        <form
          className='needs-validation'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className='form-group'>
            <label htmlFor='emailInput'>
              {t('pages.login.forms.email.label')}
            </label>
            <input
              name='email'
              type='email'
              className={`form-control ${errors.email && 'is-invalid'}`}
              id='emailInput'
              ref={register(fieldOptions.email)}
            />
            {errors.email && (
              <div className='invalid-feedback d-block'>
                {errors.email.message}
              </div>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='passwordInput'>
              {t('pages.login.forms.password.label')}
            </label>
            <input
              name='password'
              type='password'
              className={`form-control ${errors.password && 'is-invalid'}`}
              id='passwordInput'
              ref={register(fieldOptions.password)}
            />
            {errors.password && (
              <div className='invalid-feedback d-block'>
                {errors.password.message}
              </div>
            )}
          </div>

          <button type='submit' className='btn btn-primary mt-4'>
            {t('pages.login.forms.signInBtn.label')}
          </button>
        </form>
      </Col>
    </StyledLoginPage>
  )
}

export default LoginPage
