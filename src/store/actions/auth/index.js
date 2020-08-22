import * as types from './actionTypes'

export const startLoginUser = (email, password) => ({
  type: types.AUTH_LOGIN_USER,
  payload: {
    email,
    password,
  },
})

export const loginUserSuccess = (email, token) => ({
  type: types.AUTH_LOGIN_USER_SUCCESS,
  payload: {
    email,
    token,
  },
})

export const authCheck = () => ({
  type: types.AUTH_CHECK,
})

export const startLogoutUser = () => ({
  type: types.AUTH_LOGOUT_USER,
})

export const logoutUserSuccess = () => ({
  type: types.AUTH_LOGOUT_USER_SUCCESS,
})
