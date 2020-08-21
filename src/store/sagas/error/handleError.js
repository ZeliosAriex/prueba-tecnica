import { takeLatest, put } from 'redux-saga/effects'
import { errorList } from './errorList'

function* handleError(action) {
  // Guardar en el store la información del error

  // Mostrar un toast al usuario con información sobre el error
  yield put({
    type: 'TOAST_DISPLAY_ERROR',
    payload: { message: action.error.message },
  })
}

function* saga() {
  yield takeLatest(errorList, handleError)
}

export default saga
