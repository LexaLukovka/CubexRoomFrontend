import { ADD_DAY } from './action'
import moment from 'moment'

const initialState = {
  date: moment(new Date()).format('YYYY-MM-DD'),
}

const calendarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DAY:
      return {
        ...state,
        date: payload,
      }

    default: {
      return state
    }
  }
}

export default calendarReducer
