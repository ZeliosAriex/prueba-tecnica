import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/auth/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { loginUserSuccess } from '../../actions/auth'

// import { getT } from '../../util/getTranslation'

function* requestAuthLoginUser(action) {
  try {
    const endpoint = '/login'
    const response = yield call(apiCall, 'POST', endpoint, action.payload)

    if (response.status !== 200) {
      const { error } = yield call([response, 'json'])
      if (error === 'user not found') {
        throw new Error('No se encontró al usuario')
      } else throw new Error('Hubo un problema al intentar iniciar sesión')
    }

    const { token } = yield call([response, 'json'])

    // Guardamos el token en localStorage para poder mantener la sesión
    localStorage.setItem('token', token)
    localStorage.setItem('username', action.payload.email.split('@')[0])

    yield put(loginUserSuccess(action.payload.email, token))
  } catch (e) {
    yield put(createErrorAction(types.AUTH_LOGIN_USER_FAILED, e.message))
  }
}

function* watcher() {
  yield takeLatest(types.AUTH_LOGIN_USER, requestAuthLoginUser)
}

export default watcher
