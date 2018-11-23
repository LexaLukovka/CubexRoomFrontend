import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import hallReducer from './hall/reducer'
import tableReducer from './table/reducer'
import calendarReducer from './calendar/reducer'

import alertReducer from './alert/reducer'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'

const reducers = combineReducers({
  authReducer,
  hallReducer,
  tableReducer,
  calendarReducer,

  alertReducer,
  headerReducer,
  layoutReducer,
})

export default reducers
