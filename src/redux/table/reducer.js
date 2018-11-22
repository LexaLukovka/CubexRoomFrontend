import LocalStorage from 'services/LocalStorage'
import {
  ADD_TIME_FULFILLED,
  ADD_TIME_PENDING,
  ADD_TIME_REJECTED,
  GET_ROWS,
  GET_TIME_FULFILLED,
  GET_TIME_PENDING,
  GET_TIME_REJECTED,
} from './action'

const row = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const initialState = {
  rows: row,
  data: [],
}

const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROWS:
      return {
        ...state,
        rows: LocalStorage.get('rows') || [],
      }

    case GET_TIME_PENDING:
    case ADD_TIME_PENDING:
      return {
        ...state,
        loading: true,
      }

    case GET_TIME_REJECTED:
    case ADD_TIME_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case GET_TIME_FULFILLED:
    case ADD_TIME_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload.save,
      }


    default: {
      return state
    }
  }
}

export default tableReducer
