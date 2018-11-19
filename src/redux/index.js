import { combineReducers } from 'redux'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import tableReducer from './table/reducer'

const reducers = combineReducers({
  layoutReducer,
  headerReducer,
  tableReducer,
})

export default reducers
