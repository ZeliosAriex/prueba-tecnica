import { call, put, takeLatest } from 'redux-saga/effects'
import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_FAILED,
} from '../../actions/user/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { usersFetchSuccess } from '../../actions/user'

function* requestUsersFetch(action) {
  try {
    // Consumimos la API para obtener la lista de usuarios
    const URL = `${process.env.REACT_APP_API_BASE_URL}/users?page=${action.payload.page}`
    const response = yield call(apiCall, 'GET', URL)
    const { data } = yield call([response, 'json'])

    yield put(usersFetchSuccess(data))
  } catch (e) {
    yield put(
      createErrorAction(
        USERS_FETCH_FAILED,
        '😥 Ha habido un problema al intentar recuperar los usuarios'
      )
    )
  }
}

function* saga() {
  yield takeLatest(USERS_FETCH_REQUEST, requestUsersFetch)
}

export default saga
