import * as types from '../actions/ui/actionTypes'

const initialState = {
  mobileNavbar: {
    active: false,
    expanded: false,
  },
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UI_MOBILE_NAVBAR_ACTIVATE:
      return {
        ...state,
        mobileNavbar: {
          active: true,
          expanded: false,
        },
      }
    case types.UI_MOBILE_NAVBAR_DEACTIVATE:
      return {
        ...state,
        mobileNavbar: {
          active: false,
          expanded: false,
        },
      }

    case types.UI_MOBILE_NAVBAR_TOGGLE: {
      const toggledExpandedState = !state.mobileNavbar.expanded
      return {
        ...state,
        mobileNavbar: {
          ...state.mobileNavbar,
          expanded: toggledExpandedState,
        },
      }
    }

    default:
      return state
  }
}

export default uiReducer
