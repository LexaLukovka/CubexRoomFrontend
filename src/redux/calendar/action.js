export const ADD_DAY = 'ADD_DAY'

const addDay = (value) => ({
  type: ADD_DAY,
  payload: value,
})

export default { addDay }
