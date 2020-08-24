import * as types from '../actions/user/actionTypes'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case types.USERS_FETCH_SUCCESS:
      return [...action.payload.users]
    case types.USER_FETCH_SUCCESS:
      return [{ ...action.payload.user }]
    case types.USER_UPDATE_SUCCESS: {
      const updatedUserId = state.findIndex(
        (u) => u.id === action.payload.user.id
      )

      return [
        ...state.slice(0, updatedUserId),
        {
          ...state[updatedUserId],
          ...action.payload.user,
        },
        ...state.slice(updatedUserId + 1),
      ]
    }
    case types.USER_DELETE_SUCCESS: {
      return state.filter((u) => u.id !== action.payload.id)
    }
    default:
      return state
  }
}

export default userReducer
