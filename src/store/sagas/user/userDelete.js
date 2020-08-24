import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/user/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { userDeleteSuccess } from '../../actions/user'
import { getT } from '../../util/getTranslation'
import { uiFinishedLoading, uiIsLoading } from '../../actions/ui'
import { displayWarningToast } from '../../actions/toast'

function* requestUserDelete(action) {
  try {
    yield put(uiIsLoading())

    // Consumimos la API para eliminar el usuario con un determinado id
    const userId = action.payload.id
    const endpoint = `/users/${userId}`
    const response = yield call(apiCall, 'DELETE', endpoint)

    if (response.status === 204) {
      yield put(displayWarningToast(getT('toasts.userDeleted')))
      yield put(userDeleteSuccess(userId))
      action.history.push('/')
    } else throw new Error(getT('errorMessages.userDeleteFailed'))
  } catch (e) {
    yield put(
      createErrorAction(
        types.USER_DELETE_FAILED,
        getT('errorMessages.userDeleteFailed')
      )
    )
  } finally {
    yield put(uiFinishedLoading())
  }
}

function* watcher() {
  yield takeLatest(types.USER_DELETE_REQUEST, requestUserDelete)
}

export default watcher
