import { all, fork } from 'redux-saga/effects'
import usersFetch from './usersFetch'

function* userRootSaga() {
  yield all([fork(usersFetch)])
}

export default userRootSaga
