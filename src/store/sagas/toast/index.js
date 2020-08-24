import { all, fork } from 'redux-saga/effects'
import toastDisplay from './toastDisplay'

function* toastRootSaga() {
  yield all([fork(toastDisplay)])
}

export default toastRootSaga
