import { combineReducers } from 'redux'
import balanceReducer from './balance/balanceReducer'
import getUsersReducer from './users/usersReducer'
const rootReducer = combineReducers({
  balanceReducer: balanceReducer,
  usersReducer: getUsersReducer
})

export default rootReducer
