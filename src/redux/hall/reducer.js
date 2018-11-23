import { GET_HALL_FULFILLED, GET_HALL_PENDING, GET_HALL_REJECTED } from './action'

const initialState = {
  halls: [],
}

const hallReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_HALL_PENDING:
      return {
        ...state,
        loading: true,
      }

    case GET_HALL_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case GET_HALL_FULFILLED:
      return {
        ...state,
        loading: false,
        halls: payload.halls,
      }

    default: {
      return state
    }
  }
}

export default hallReducer
