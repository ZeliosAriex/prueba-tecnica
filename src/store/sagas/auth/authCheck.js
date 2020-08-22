import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/auth/actionTypes'
import { loginUserSuccess } from '../../actions/auth'

// import { getT } from '../../util/getTranslation'

function* authCheck() {
  // Comprobamos en el localStorage si existe un token
  const token = localStorage.getItem('token')

  if (token) {
    const username = localStorage.getItem('username')
    yield put(loginUserSuccess(username, token))
  }
}

function* watcher() {
  yield takeLatest(types.AUTH_CHECK, authCheck)
}

export default watcher
