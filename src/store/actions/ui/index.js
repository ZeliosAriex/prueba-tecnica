import * as types from './actionTypes'

export const uiIsLoading = () => ({
  type: types.UI_IS_LOADING,
})

export const uiFinishedLoading = () => ({
  type: types.UI_FINISHED_LOADING,
})

export const activateMobileNavbar = () => ({
  type: types.UI_MOBILE_NAVBAR_ACTIVATE,
})

export const deactivateMobileNavbar = () => ({
  type: types.UI_MOBILE_NAVBAR_DEACTIVATE,
})

export const movileNavbarToggleExpand = () => ({
  type: types.UI_MOBILE_NAVBAR_TOGGLE,
})
