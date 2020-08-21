import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { startUsersFetch } from '../../../store/actions/user'

const StyledUserListPage = styled.div.attrs({
  className: 'mt-4',
})``

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
      <h1>User List</h1>
      <ol>
        {users.map((u) => (
          <li key={u.id}>{u.first_name}</li>
        ))}
      </ol>
    </StyledUserListPage>
  )
}

export default UserListPage
