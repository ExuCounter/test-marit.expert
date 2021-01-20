import * as actionTypes from './actionTypes'

export const setCount = (count) => ({
  type: actionTypes.SET_COUNT,
  payload: count,
})

export const setData = (socketData) => ({
  type: actionTypes.SET_DATA,
  payload: socketData,
})
