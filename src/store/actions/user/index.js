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
