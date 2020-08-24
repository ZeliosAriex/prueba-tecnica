import { takeLatest, put } from 'redux-saga/effects'
import { errorList } from './errorList'
import { displayErrorToast } from '../../actions/toast'

function* handleError(action) {
  // Mostrar un toast al usuario con información sobre el error
  yield put(displayErrorToast(action.error.message))
}

function* watcher() {
  yield takeLatest(errorList, handleError)
}

export default watcher
