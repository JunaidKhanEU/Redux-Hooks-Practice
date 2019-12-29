import { combineReducers } from 'redux'
import balanceReducer from './balance/balanceReducer'
const rootReducer = combineReducers({
  balanceReducer: balanceReducer
})

export default rootReducer
