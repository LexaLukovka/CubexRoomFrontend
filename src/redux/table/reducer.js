/* eslint-disable no-shadow,no-return-assign,prefer-destructuring */
import LocalStorage from 'services/LocalStorage'
import { ADD_TIME, GET_ROWS, GET_TIME } from './action'
import { isEmpty } from 'lodash'
import moment from 'moment'


let id = -1

function createData(day) {
  id += 1
  const row = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
  return { id, day, row }
}

const rows = [
  createData('green'),
  createData('red'),
  createData('blue'),
  createData('purple'),
]

const initialState = {
  isChecked: false,
  rows: LocalStorage.get('rows') || rows,
  data: LocalStorage.get('data') || [],
}

const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROWS:
      return {
        ...state,
        rows: LocalStorage.get('rows') || [],
      }

    case GET_TIME:
      return {
        ...state,
        data: LocalStorage.get('data') || [],
      }

    case ADD_TIME: {
      const { rows, data } = state

      rows.map(values =>
        values.row.map(row =>
          (values.id === payload.id && row === payload.value) &&
          (data.map((values, index) =>
            ((values.id === payload.id &&
              values.time === payload.value &&
              values.date === moment(payload.calendar)
                .format('YYYY-MM-DD'))
              ? (data.splice(index, 1))
              : data.push({ id: payload.id, time: payload.value, date: payload.calendar }))))))

      // data.push({ id: payload.id, time: payload.value, date: payload.calendar })

      LocalStorage.put('data', data)
      return {
        ...state,
        data,
      }
    }

    default: {
      return state
    }
  }
}

export default tableReducer
