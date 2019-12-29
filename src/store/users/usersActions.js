import { GETUSERSFAILED, GETUSERSSUCCESS } from './usersConstant'

const getUsers = (users) => {
  return {
    type: GETUSERSSUCCESS,
    payload: users
  }
}
const getUsersAction = () => {
  return async (dispatch) => {
    try {
      const res = await window.fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      dispatch(getUsers(users))
    } catch (error) {
      dispatch(() => ({
        type: GETUSERSFAILED
      }))
    }
  }
}

export { getUsersAction }
