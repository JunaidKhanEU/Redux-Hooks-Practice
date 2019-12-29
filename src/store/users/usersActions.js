import {
  FETCHUSERSTART,
  FETCHUSERSUCCESS,
  FETCHUSERFAIL
} from './usersConstant'

const fetchUserStart = () => {
  return {
    type: FETCHUSERSTART
  }
}
const fetchUserSucess = (payload) => {
  return {
    type: FETCHUSERSUCCESS,
    payload: payload
  }
}
const fetchUserFail = (payload) => {
  return {
    type: FETCHUSERFAIL,
    payload: payload
  }
}

const fetchUsersStartAsyncAction = () => {
  return (dispatch) => {
    dispatch(fetchUserStart())
    window.fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => dispatch(fetchUserSucess(data)))
      .catch(error => {
        console.log(error)
        dispatch(fetchUserFail(error))
      })
  }
}

export default fetchUsersStartAsyncAction
