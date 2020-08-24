/* Aquí se deben añadir las acciones relacionadas con errores para que se
puedan tratar centralizadamente */
import {
  USERS_FETCH_FAILED,
  USER_FETCH_FAILED,
} from '../../actions/user/actionTypes'
import { AUTH_LOGIN_USER_FAILED } from '../../actions/auth/actionTypes'

export const errorList = [
  USERS_FETCH_FAILED,
  USER_FETCH_FAILED,
  AUTH_LOGIN_USER_FAILED,
]
