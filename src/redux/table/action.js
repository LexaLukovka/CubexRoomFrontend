export const GET_TIME = 'GET_TIME'
export const ADD_TIME = 'ADD_TIME'

const getTime = () => ({
  type: GET_TIME,
})

const addTime = (rowId, value) => ({
  type: ADD_TIME,
  rowId,
  payload: value,
})

export default { getTime, addTime }
