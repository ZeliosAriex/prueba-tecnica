import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { startUsersFetch } from './store/actions/user'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(startUsersFetch())
  })

  return (
    <div className='App'>
      <h1>{t('greetMessage')}</h1>
      <ToastContainer />
    </div>
  )
}

export default App
