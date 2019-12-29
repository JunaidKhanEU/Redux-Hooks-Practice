import { GETUSERSSUCCESS, GETUSERSFAILED } from './usersConstant'

const initialUsersState = {
  users: [],
  error: true
}
const getUsersReducer = (state = initialUsersState, action = {}) => {
  switch (action.type) {
    case GETUSERSSUCCESS:
      return { ...state, users: action.payload, error: false }
    case GETUSERSFAILED:
      return { ...state, isLoading: false, error: true }
    default:
      return state
  }
}

export default getUsersReducer
