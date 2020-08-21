import { call, put, takeLatest } from 'redux-saga/effects'
import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_FAILED,
} from '../../actions/user/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { usersFetchSuccess } from '../../actions/user'
import { getT } from '../../util/getTranslation'

function* requestUsersFetch(action) {
  try {
    // Consumimos la API para obtener la lista de usuarios
    const endpoint = `/users?page=${action.payload.page}`
    const response = yield call(apiCall, 'GET', endpoint)
    const { data } = yield call([response, 'json'])

    yield put(usersFetchSuccess(data))
  } catch (e) {
    yield put(
      createErrorAction(
        USERS_FETCH_FAILED,
        getT('errorMessages.usersFetchFailed')
      )
    )
  }
}

function* saga() {
  yield takeLatest(USERS_FETCH_REQUEST, requestUsersFetch)
}

export default saga
