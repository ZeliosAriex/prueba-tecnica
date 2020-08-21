import { all, fork } from 'redux-saga/effects'
import handleError from './handleError'

function* errorRootSaga() {
  yield all([fork(handleError)])
}

export default errorRootSaga
