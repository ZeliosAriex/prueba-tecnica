import { all, fork } from 'redux-saga/effects'
import usersFetch from './usersFetch'
import userUpdate from './userUpdate'
import userDelete from './userDelete'

function* userRootSaga() {
  yield all([fork(usersFetch), fork(userUpdate), fork(userDelete)])
}

export default userRootSaga
