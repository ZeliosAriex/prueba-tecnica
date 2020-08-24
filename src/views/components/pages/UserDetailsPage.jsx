import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../common/Title'

const UserDetailsPage = () => {
  const { id } = useParams()
  console.log(id)

  return <Title>User Details</Title>
}

export default UserDetailsPage
