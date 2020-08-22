import { all, fork } from 'redux-saga/effects'
import userRootSagas from './user'
import errorRootSaga from './error'
import toastRootSaga from './toast'
import authRootSaga from './auth'

function* rootSaga() {
  yield all([
    fork(userRootSagas),
    fork(errorRootSaga),
    fork(toastRootSaga),
    fork(authRootSaga),
  ])
}

export default rootSaga
