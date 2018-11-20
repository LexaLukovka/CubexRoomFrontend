export const GET_ROWS = 'GET_ROWS'
export const GET_TIME = 'GET_TIME'
export const ADD_TIME = 'ADD_TIME'

const getRows = () => ({
  type: GET_ROWS,
})

const getTime = () => ({
  type: GET_TIME,
})

const addTime = (value) => ({
  type: ADD_TIME,
  payload: value,
})

export default { getRows, getTime, addTime }
