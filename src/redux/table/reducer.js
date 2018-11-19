/* eslint-disable no-shadow,no-return-assign */
import LocalStorage from 'services/LocalStorage'
import { ADD_TIME, GET_TIME } from './action'
import { isEmpty } from 'lodash'


let id = -1

function createData(day) {
  const row = []
  const selected = false
  id += 1

  const ten = { time: '10:00', selected }
  const eleven = { time: '11:00', selected }
  const twelve = { time: '12:00', selected }
  const thirteen = { time: '13:00', selected }
  const fourteen = { time: '14:00', selected }
  const fifteen = { time: '15:00', selected }
  const sixteen = { time: '16:00', selected }
  const seventeen = { time: '17:00', selected }
  const eighteen = { time: '18:00', selected }

  row.push(ten)
  row.push(eleven)
  row.push(twelve)
  row.push(thirteen)
  row.push(fourteen)
  row.push(fifteen)
  row.push(sixteen)
  row.push(seventeen)
  row.push(eighteen)

  return { id, day, row }
}

const rows = [
  createData('Понедельник'),
  createData('Вторник'),
  createData('Среда'),
  createData('Четверг'),
  createData('Пятница'),
]

const initialState = {
  id: null,
  rows: LocalStorage.get('rows') || rows,
}

const tableReducer = (state = initialState, { type, rowId, payload }) => {
  switch (type) {
    case GET_TIME:
      return {
        ...state,
        rows: LocalStorage.get('rows') || [],
      }

    case ADD_TIME: {
      const { rows } = state

      rows.map(values =>
        values.row.map(row =>
          values.id === rowId && row.time === payload.time &&
          (row.selected = !row.selected)))

      LocalStorage.put('rows', rows)
      return {
        ...state,
        rows,
      }
    }

    default: {
      return state
    }
  }
}

export default tableReducer
