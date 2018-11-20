/* eslint-disable no-shadow,no-return-assign,prefer-destructuring */
import LocalStorage from 'services/LocalStorage'
import { ADD_TIME, GET_TIME } from './action'
import { isEmpty } from 'lodash'


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
  id: null,
  rows: LocalStorage.get('rows') || rows,
  data: LocalStorage.get('data') || [],
}

const tableReducer = (state = initialState, { type, rowId, payload }) => {
  switch (type) {
    case GET_TIME:
      return {
        ...state,
        rows: LocalStorage.get('rows') || [],
      }

    case ADD_TIME: {
      const { rows, data } = state
      let id = ''
      let time = ''

      rows.map(values =>
        values.row.map(row =>
          values.id === rowId && row === payload &&
          (id = values.id) && (time = row)))

      data.push({ id, time })

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
