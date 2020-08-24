import { combineReducers } from 'redux'
import userReducer from './user'
import authReducer from './auth'
import uiReducer from './ui'

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  ui: uiReducer,
})

export default rootReducer
