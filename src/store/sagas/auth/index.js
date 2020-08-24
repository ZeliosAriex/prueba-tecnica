import { all, fork } from 'redux-saga/effects'
import authLoginUser from './authLoginUser'
import authCheck from './authCheck'
import authLogoutUser from './authLogoutUser'

function* authRootSaga() {
  yield all([fork(authLoginUser), fork(authCheck), fork(authLogoutUser)])
}

export default authRootSaga
