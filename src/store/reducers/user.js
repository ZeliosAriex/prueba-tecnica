import * as types from '../actions/user/actionTypes'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case types.USERS_FETCH_SUCCESS:
      return [...action.payload.users]

    default:
      return state
  }
}

export default userReducer
