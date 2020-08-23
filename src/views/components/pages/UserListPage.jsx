import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { startUsersFetch } from '../../../store/actions/user'
import Col from '../common/Col'
import UsersTable from '../UsersTable'
import Title from '../common/Title'
import userListSVG from '../../../resources/images/user-list.svg'

const StyledUserListPage = styled.div.attrs({
  className: 'mt-5',
})`
  .title-icon {
    width: 2rem;
    margin-right: 1rem;
  }
`

const UserListPage = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(startUsersFetch())
  }, [])

  return (
    <StyledUserListPage>
      <Helmet title={t('documentHeadTitles.userList')} />
      <Col sm={12} md={10} lg={8} xl={7} className='m-auto'>
        <Title className='mb-4'>
          <img className='title-icon' src={userListSVG} alt='User List' />
          Lista de Usuarios
        </Title>
        <UsersTable users={users} />
      </Col>
    </StyledUserListPage>
  )
}

export default UserListPage
