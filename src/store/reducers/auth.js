import * as types from '../actions/auth/actionTypes'

const initialState = {
  username: null,
  isLoggedIn: false,
}

// eslint-disable-next-line no-unused-vars
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN_USER_SUCCESS:
      return {
        username: action.payload.email.split('@')[0],
        isLoggedIn: true,
      }
    case types.AUTH_LOGOUT_USER_SUCCESS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default authReducer
