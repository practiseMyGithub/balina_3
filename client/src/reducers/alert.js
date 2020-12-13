import { SET_ALERT, REMOVE_ALERT, KICK_ALERT } from '../actions/types'

const initialState = [];

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case KICK_ALERT:
      return ''
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.length > 0 && state.filter(alert => alert.id !== payload)
    default:
      return state;
  }
}