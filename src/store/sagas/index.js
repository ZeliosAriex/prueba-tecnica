import { all, fork } from 'redux-saga/effects'
import userRootSagas from './user'
import errorRootSaga from './error'
import toastRootSaga from './toast'

function* rootSaga() {
  yield all([fork(userRootSagas), fork(errorRootSaga), fork(toastRootSaga)])
}

export default rootSaga
