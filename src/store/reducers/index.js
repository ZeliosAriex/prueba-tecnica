import { combineReducers } from 'redux'
import userReducer from './user'
import authReducer from './auth'

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
})

export default rootReducer
