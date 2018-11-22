/* eslint-disable no-shadow,no-return-assign,prefer-destructuring */
import LocalStorage from 'services/LocalStorage'
import { ADD_TIME, GET_ROWS, GET_TIME } from './action'
import { isEmpty } from 'lodash'

const row = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const initialState = {
  rows: LocalStorage.get('rows') || row,
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
      const { data } = state

      const indexSelected = data.findIndex(dataItem =>
        dataItem.color === payload.color && dataItem.time === payload.value && dataItem.date === payload.calendar)

      if (indexSelected > -1) {
        const indexUserSelected = data.findIndex(dataItem =>
          dataItem.color === payload.color && dataItem.time === payload.value && dataItem.date === payload.calendar
          && dataItem.userId === payload.userId)
        if (indexUserSelected > -1) {
          data.splice(indexSelected, 1)
        }
      } else {
        data.push({ color: payload.color, time: payload.value, date: payload.calendar, userId: payload.userId })
      }

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
