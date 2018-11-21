import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import tableReducer from './table/reducer'
import calendarReducer from './calendar/reducer'

const reducers = combineReducers({
  authReducer,
  layoutReducer,
  headerReducer,
  tableReducer,
  calendarReducer,
})

export default reducers
