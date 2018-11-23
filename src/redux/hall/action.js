import Hall from 'services/api/Hall'

export const GET_HALL = 'GET_HALL'
export const GET_HALL_PENDING = 'GET_HALL_PENDING'
export const GET_HALL_FULFILLED = 'GET_HALL_FULFILLED'
export const GET_HALL_REJECTED = 'GET_THALLREJECTED'

const getHall = () => ({
  type: GET_HALL,
  payload: Hall.get(),
})

export default { getHall }
