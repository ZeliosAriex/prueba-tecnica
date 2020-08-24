/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import { startUsersFetch } from '../../../store/actions/user'
import Col from '../common/Col'
import UsersTable from '../UsersTable'
import Title from '../common/Title'
import userListSVG from '../../../resources/images/user-list.svg'
import MainContainer from '../common/MainContainer'

const StyledUserListPage = styled(MainContainer).attrs({
  className: 'mt-5 mb-5',
})``

const UserListPage = () => {
  const users = useSelector((state) => state.users)
  const ui = useSelector((state) => state.ui)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(startUsersFetch())
  }, [])

  return (
    <StyledUserListPage>
      <Helmet title={t('documentHeadTitles.userList')} />
      <Col md={10} lg={8} xl={9} className='m-auto'>
        <Title className='mb-4'>
          <img className='title-icon' src={userListSVG} alt='User List' />
          {t('pages.userList.title')}
        </Title>
        {!ui.isLoading ? (
          <UsersTable users={users} />
        ) : (
          <Skeleton count={7} height={38} className='mb-2' />
        )}
      </Col>
    </StyledUserListPage>
  )
}

export default UserListPage
