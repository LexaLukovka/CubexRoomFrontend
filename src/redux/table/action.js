import Save from 'services/api/Save'

export const GET_ROWS = 'GET_ROWS'

export const GET_TIME = 'GET_TIME'
export const GET_TIME_PENDING = 'GET_TIME_PENDING'
export const GET_TIME_FULFILLED = 'GET_TIME_FULFILLED'
export const GET_TIME_REJECTED = 'GET_TIME_REJECTED'

export const ADD_TIME = 'ADD_TIME'
export const ADD_TIME_PENDING = 'ADD_TIME_PENDING'
export const ADD_TIME_FULFILLED = 'ADD_TIME_FULFILLED'
export const ADD_TIME_REJECTED = 'ADD_TIME_REJECTED'

const getRows = () => ({
  type: GET_ROWS,
})

const getTime = () => ({
  type: GET_TIME,
  payload: Save.get(),
})

const addTime = (value) => ({
  type: ADD_TIME,
  payload: Save.save(value),
})

export default { getRows, getTime, addTime }
