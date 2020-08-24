import * as types from '../actions/user/actionTypes'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case types.USERS_FETCH_SUCCESS:
      return [...action.payload.users]
    case types.USER_FETCH_SUCCESS:
      return [{ ...action.payload.user }]
    default:
      return state
  }
}

export default userReducer
