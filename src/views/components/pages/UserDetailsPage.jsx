import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Title from '../common/Title'
import MainContainer from '../common/MainContainer'
import Col from '../common/Col'
import { mediaQueries } from '../../../styles/mediaQueries'
import userDetailsIcon from '../../../resources/images/user-details.svg'
import { startUserFetch } from '../../../store/actions/user'

const StyledUserDetailsPage = styled(MainContainer).attrs({
  className: 'mt-5 mb-5',
})`
  .user-profile-img {
    margin: 0 auto;
    display: block;
    margin-bottom: 2rem;
    border-radius: 290993px;
  }

  .back-btn {
    width: 100%;
  }

  @media ${mediaQueries.sm} {
    .back-btn {
      width: auto;
    }
  }
`

const UserDetailsPage = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const ui = useSelector((state) => state.ui)
  const dispatch = useDispatch()
  const { register, errors } = useForm()
  const { t } = useTranslation()
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    dispatch(startUserFetch(id))
  }, [])

  const fieldOptions = {
    firstName: {},
  }

  const getUser = () => users.filter((u) => u.id === parseInt(id, 10))[0]

  const userIsLoaded = () => !!getUser()

  const renderForm = (user) => {
    if (userIsLoaded() && !ui.isLoading) {
      return (
        <>
          <img
            className='user-profile-img'
            src={user.avatar}
            alt='User profile'
          />
          <form noValidate>
            <div className='form-row'>
              <div className='form-group col-sm-6'>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='emailInput'>Nombre</label>
                <input
                  defaultValue={user.first_name}
                  name='first_name'
                  type='text'
                  className={`form-control ${errors.firstName && 'is-invalid'}`}
                  id='firstNameInput'
                  disabled
                  ref={register(fieldOptions.firstName)}
                />
                {errors.firstName && (
                  <div className='invalid-feedback d-block'>
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div className='form-group col-sm-6'>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='emailInput'>Apellidos</label>
                <input
                  defaultValue={user.last_name}
                  name='last_name'
                  type='text'
                  className={`form-control ${errors.lastName && 'is-invalid'}`}
                  id='lastNameInput'
                  disabled
                  ref={register(fieldOptions.lastName)}
                />
                {errors.lastName && (
                  <div className='invalid-feedback d-block'>
                    {errors.lastName.message}
                  </div>
                )}
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group col-sm-12'>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='emailInput'>Correo Electrónico</label>
                <input
                  defaultValue={user.email}
                  name='email'
                  type='email'
                  className={`form-control ${errors.email && 'is-invalid'}`}
                  id='emailInput'
                  disabled
                  ref={register(fieldOptions.email)}
                />
                {errors.email && (
                  <div className='invalid-feedback d-block'>
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>
          </form>

          <Link className='btn btn-info back-btn mt-5' to='/users'>
            Atrás
          </Link>
        </>
      )
    }
    return (
      <div>
        <Skeleton
          className='user-profile-img'
          circle
          height={128}
          width={128}
        />
        <Skeleton count={2} height={38} className='mb-5' />
      </div>
    )
  }

  // Extraemos el usuario con el id correspondiente
  const user = getUser()

  return (
    <StyledUserDetailsPage>
      <Helmet title={t('documentHeadTitles.userDetails')} />
      <Col md={10} lg={8} xl={9} className='m-auto'>
        <Title className='mb-5'>
          <img
            className='title-icon'
            src={userDetailsIcon}
            alt='User Details'
          />
          {t('pages.userDetails.title')}
        </Title>
        {renderForm(user)}
      </Col>
    </StyledUserDetailsPage>
  )
}

export default UserDetailsPage
