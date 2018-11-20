import { combineReducers } from 'redux'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import tableReducer from './table/reducer'
import calendarReducer from './calendar/reducer'

const reducers = combineReducers({
  layoutReducer,
  headerReducer,
  tableReducer,
  calendarReducer,
})

export default reducers
