import * as types from './actionTypes'

export const startUsersFetch = (page = 1) => ({
  type: types.USERS_FETCH_REQUEST,
  payload: {
    page,
  },
})

export const usersFetchSuccess = (users) => ({
  type: types.USERS_FETCH_SUCCESS,
  payload: {
    users,
  },
})

export const startUserFetch = (id) => ({
  type: types.USERS_FETCH_REQUEST,
  payload: {
    id,
  },
})

export const userFetchSuccess = (user) => ({
  type: types.USER_FETCH_SUCCESS,
  payload: {
    user,
  },
})

export const startUserUpdate = (user) => ({
  type: types.USER_UPDATE_REQUEST,
  payload: {
    user,
  },
})

export const userUpdateSuccess = (user) => ({
  type: types.USER_UPDATE_SUCCESS,
  payload: {
    user,
  },
})

export const startUserDelete = (id, history) => ({
  type: types.USER_DELETE_REQUEST,
  payload: {
    id,
  },
  history
})

export const userDeleteSuccess = (id) => ({
  type: types.USER_DELETE_SUCCESS,
  payload: {
    id,
  },
})
