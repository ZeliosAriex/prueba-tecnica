import { takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as types from '../../actions/toast/actionTypes'

const defaultToastOptions = {
  position: 'top-right',
  autoClose: 2000,
}

const errorToastOptions = {
  ...defaultToastOptions,
  autoClose: 4000,
}

function* toastDisplayInfo(action) {
  yield call(toast.info, action.payload.message, defaultToastOptions)
}

function* toastDisplayError(action) {
  yield call(toast.error, action.payload.message, errorToastOptions)
}

function* toastDisplaySuccess(action) {
  yield call(toast.success, action.payload.message, defaultToastOptions)
}

function* toastDisplayWarning(action) {
  yield call(toast.warn, action.payload.message, defaultToastOptions)
}

function* watcher() {
  yield takeLatest(types.TOAST_DISPLAY_INFO, toastDisplayInfo)
  yield takeLatest(types.TOAST_DISPLAY_ERROR, toastDisplayError)
  yield takeLatest(types.TOAST_DISPLAY_SUCCESS, toastDisplaySuccess)
  yield takeLatest(types.TOAST_DISPLAY_WARNING, toastDisplayWarning)
}

export default watcher
