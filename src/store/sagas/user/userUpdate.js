import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/user/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { userUpdateSuccess } from '../../actions/user'
import { getT } from '../../util/getTranslation'
import { uiFinishedLoading, uiIsLoading } from '../../actions/ui'

function* requestUserUpdate(action) {
  try {
    yield put(uiIsLoading())

    // Consumimos la API para actualizar el usuario con un determinado id
    const userId = action.payload.user.id
    const endpoint = `/users/${userId}`
    const response = yield call(apiCall, 'PUT', endpoint, {
      ...action.payload.user,
    })
    let updatedUser = yield call([response, 'json'])

    updatedUser = { ...updatedUser, id: userId }

    yield put(userUpdateSuccess(updatedUser))
  } catch (e) {
    yield put(
      createErrorAction(
        types.USER_UPDATE_FAILED,
        getT('errorMessages.userUpdateFailed')
      )
    )
  } finally {
    yield put(uiFinishedLoading())
  }
}

function* watcher() {
  yield takeLatest(types.USER_UPDATE_REQUEST, requestUserUpdate)
}

export default watcher
