import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { startUsersFetch } from './store/actions/user'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startUsersFetch())
  })

  return (
    <div className='App'>
      <h1>Hello There!</h1>
      <ToastContainer />
    </div>
  )
}

export default App
