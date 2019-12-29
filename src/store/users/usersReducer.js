import {
  FETCHUSERSTART,
  FETCHUSERSUCCESS,
  FETCHUSERFAIL
} from './usersConstant'

const initialUsersState = {
  users: [],
  isFetching: false,
  errorMessage: null

}
const userReducer = (state = initialUsersState, action = {}) => {
  switch (action.type) {
    case FETCHUSERSTART:
      return {
        ...state,
        isFetching: true
      }
    case FETCHUSERSUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      }
    case FETCHUSERFAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default userReducer
