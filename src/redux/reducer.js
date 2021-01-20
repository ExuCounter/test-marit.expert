import { SET_COUNT, SET_DATA } from './actionTypes'

const initialState = {
  socketData: null,
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        socketData: action.payload,
      }

    default:
      return state
  }
}
