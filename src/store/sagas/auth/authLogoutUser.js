import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/auth/actionTypes'
import { logoutUserSuccess } from '../../actions/auth'

// import { getT } from '../../util/getTranslation'

function* authLogoutUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  yield put(logoutUserSuccess())
}

function* watcher() {
  yield takeLatest(types.AUTH_LOGOUT_USER, authLogoutUser)
}

export default watcher
