import { all, fork } from 'redux-saga/effects'
import toastDisplayError from './error'

function* toastRootSaga() {
  yield all([fork(toastDisplayError)])
}

export default toastRootSaga
