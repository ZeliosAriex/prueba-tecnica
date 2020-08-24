import * as types from './actionTypes'

export const displayInfoToast = (message) => ({
  type: types.TOAST_DISPLAY_INFO,
  payload: {
    message,
  },
})

export const displayErrorToast = (message) => ({
  type: types.TOAST_DISPLAY_ERROR,
  payload: {
    message,
  },
})

export const displaySuccessToast = (message) => ({
  type: types.TOAST_DISPLAY_SUCCESS,
  payload: {
    message,
  },
})
export const displayWarningToast = (message) => ({
  type: types.TOAST_DISPLAY_WARNING,
  payload: {
    message,
  },
})
