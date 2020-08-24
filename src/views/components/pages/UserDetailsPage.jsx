/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { useForm, FormProvider } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Title from '../common/Title'
import MainContainer from '../common/MainContainer'
import Col from '../common/Col'
import { mediaQueries } from '../../../styles/mediaQueries'
import userDetailsIcon from '../../../resources/images/user-details.svg'
import {
  startUserDelete,
  startUserFetch,
  startUserUpdate,
} from '../../../store/actions/user'
import Input from '../common/Input'

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

  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  @media ${mediaQueries.sm} {
    .back-btn {
      width: auto;
    }

    .btn {
      width: auto;
      margin-bottom: 0;
    }
  }
`

const UserDetailsPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const methods = useForm()
  const users = useSelector((state) => state.users)
  const ui = useSelector((state) => state.ui)
  const [isFormEditable, setIsFormEditable] = useState(false)
  const dispatch = useDispatch()
  const {
    handleSubmit, register, setValue, errors
  } = useForm()
  const { t } = useTranslation()
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    dispatch(startUserFetch(id))
  }, [])

  const fieldOptions = {
    firstName: {
      required: t('generic.fieldNotEmpty'),
    },
    lastName: {
      required: t('generic.fieldNotEmpty'),
    },
    email: {
      required: t('generic.fieldNotEmpty'),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('pages.login.form.email.errors.invalid'),
      },
    },
  }

  const getUser = () => users.filter((u) => u.id === parseInt(id, 10))[0]

  // Extraemos el usuario con el id correspondiente
  const user = getUser()

  const userIsLoaded = () => !!getUser()

  const handleEditForm = () => setIsFormEditable(true)

  const rollBackFormValues = () => {
    /* Si el usuario cancela la edición del formulario debemos recupar los valores
     * de los campos originales y asignarlos en su respectivo formulario */
    setValue('firstName', user.first_name)
    setValue('lastName', user.last_name)
    setValue('email', user.email)
  }

  const handleDeleteUser = () => {
    dispatch(startUserDelete(parseInt(id, 10), history))
  }

  const handleCancelEditForm = () => {
    setIsFormEditable(false)
    rollBackFormValues()
  }

  const onSubmit = (values) => {
    const userToUpdate = {
      id: parseInt(id, 10),
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
    }

    dispatch(startUserUpdate(userToUpdate))
    setIsFormEditable(false)
  }

  const renderFormEditButtons = () => {
    if (!isFormEditable)
      return (
        <button
          onClick={handleEditForm}
          type='button'
          className='btn btn-primary'
        >
          {t('pages.userDetails.editBtn')}
        </button>
      )

    return (
      <div>
        <button
          onClick={handleCancelEditForm}
          type='button'
          className='btn btn-secondary mr-2'
        >
          {t('pages.userDetails.cancelBtn')}
        </button>

        <button type='submit' className='btn btn-warning'>
          {t('pages.userDetails.updateBtn')}
        </button>

        <button
          onClick={handleDeleteUser}
          type='button'
          className='btn btn-danger float-right'
        >
          {t('pages.userDetails.deleteBtn')}
        </button>
      </div>
    )
  }

  const renderForm = () => {
    if (userIsLoaded() && !ui.isLoading) {
      return (
        <>
          <img
            className='user-profile-img'
            src={user.avatar}
            alt='User profile'
          />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
              <div className='form-row'>
                <div className='form-group col-sm-6'>
                  <Input
                    name='firstName'
                    label={t('pages.userDetails.form.firstName.label')}
                    defaultValue={user.first_name}
                    disabled={!isFormEditable}
                    rules={fieldOptions.firstName}
                  />
                </div>

                <div className='form-group col-sm-6'>
                  <Input
                    name='lastName'
                    label={t('pages.userDetails.form.lastName.label')}
                    defaultValue={user.last_name}
                    disabled={!isFormEditable}
                    rules={fieldOptions.lastName}
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-sm-12'>
                  <Input
                    name='email'
                    label={t('pages.userDetails.form.email.label')}
                    defaultValue={user.email}
                    disabled={!isFormEditable}
                    rules={fieldOptions.email}
                  />
                </div>
              </div>

              {renderFormEditButtons()}
            </form>
          </FormProvider>
          <Link className='btn btn-info back-btn mt-5' to='/users'>
            {t('pages.userDetails.goBackBtn')}
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
        <Skeleton count={4} height={38} className='mb-5' />
        <Link className='btn btn-info back-btn' to='/users'>
          {t('pages.userDetails.goBackBtn')}
        </Link>
      </div>
    )
  }

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
