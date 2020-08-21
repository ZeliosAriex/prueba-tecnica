import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainContainer from './views/components/common/MainContainer'
import UserListPage from './views/components/pages/UserListPage'

function App() {
  return (
    <>
      <ToastContainer />
      <MainContainer>
        <UserListPage />
      </MainContainer>
    </>
  )
}

export default App
