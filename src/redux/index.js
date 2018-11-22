import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import tableReducer from './table/reducer'
import calendarReducer from './calendar/reducer'

import alertReducer from './alert/reducer'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'

const reducers = combineReducers({
  authReducer,
  tableReducer,
  calendarReducer,

  alertReducer,
  headerReducer,
  layoutReducer,
})

export default reducers
