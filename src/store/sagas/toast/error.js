import { takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'

const errorToastOptions = {
  position: 'top-right',
  autoClose: 4000,
}

function* toastDisplayError(action) {
  yield call(toast.error, action.payload.message, errorToastOptions)
}

function* watcher() {
  yield takeLatest('TOAST_DISPLAY_ERROR', toastDisplayError)
}

export default watcher
