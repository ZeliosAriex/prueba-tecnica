import { USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS } from './actionTypes'

export const startUsersFetch = (page = 1) => ({
  type: USERS_FETCH_REQUEST,
  payload: {
    page,
  },
})

export const usersFetchSuccess = (users) => ({
  type: USERS_FETCH_SUCCESS,
  payload: {
    users,
  },
})
