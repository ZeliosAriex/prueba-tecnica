import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { startUsersFetch } from './store/actions/user'
import 'react-toastify/dist/ReactToastify.css'
import MainContainer from './views/components/common/MainContainer'

function App() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(startUsersFetch())
    i18next.changeLanguage('es')
  }, [dispatch])

  return (
    <>
      <ToastContainer />
      <MainContainer>
        <h1>{t('greetMessage')}</h1>
      </MainContainer>
    </>
  )
}

export default App
