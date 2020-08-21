import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startUsersFetch } from '../../../store/actions/user'

const UserListPage = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Fetching users...')
    dispatch(startUsersFetch())
  }, [])

  return (
    <>
      <h1>User List</h1>
      <ol>
        {users.map((u) => (
          <li key={u.id}>{u.first_name}</li>
        ))}
      </ol>
    </>
  )
}

export default UserListPage
