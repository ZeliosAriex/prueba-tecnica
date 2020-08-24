import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/user/actionTypes'
import { apiCall } from '../../util/apiCall'
import { createErrorAction } from '../../util/createErrorAction'
import { userFetchSuccess, usersFetchSuccess } from '../../actions/user'
import { getT } from '../../util/getTranslation'
import { uiFinishedLoading, uiIsLoading } from '../../actions/ui'

function* requestUsersFetch(action) {
  try {
    yield put(uiIsLoading())

    // Consumimos la API para obtener la lista de usuarios
    const endpoint = '/users'
    const response = yield call(apiCall, 'GET', endpoint, {
      page: action.payload.page,
    })
    const { data } = yield call([response, 'json'])

    yield put(usersFetchSuccess(data))
  } catch (e) {
    yield put(
      createErrorAction(
        types.USERS_FETCH_FAILED,
        getT('errorMessages.usersFetchFailed')
      )
    )
  } finally {
    yield put(uiFinishedLoading())
  }
}

function* requestUserFetch(action) {
  try {
    yield put(uiIsLoading())

    // Consumimos la API para obtener al usuario con un id determinado
    const endpoint = `/users/${action.payload.id}`
    const response = yield call(apiCall, 'GET', endpoint)
    const { data } = yield call([response, 'json'])

    yield put(userFetchSuccess(data))
  } catch (e) {
    yield put(
      createErrorAction(
        types.USER_FETCH_FAILED,
        getT('errorMessages.userFetchFailed')
      )
    )
  } finally {
    yield put(uiFinishedLoading())
  }
}

function* requestUsers(action) {
  if (action.payload.id) {
    yield* requestUserFetch(action)
  } else {
    yield* requestUsersFetch(action)
  }
}

function* watcher() {
  yield takeLatest(types.USERS_FETCH_REQUEST, requestUsers)
}

export default watcher
