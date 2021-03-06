import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsersStartAsyncAction from '../store/users/usersActions'

const HomePage = (props) => {
  const balance = useSelector((state) => state.balanceReducer.balance)
  const users = useSelector(state => state.usersReducer.users)
  const error = useSelector(state => state.usersReducer.error)
  const dispatch = useDispatch()
  console.log('balance', error)
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Balance : {balance}</h2>
      <br />
      <button onClick={() => dispatch(fetchUsersStartAsyncAction())}>Get Users</button>
      <ul>
        {users.length === 0 && <li> No Users Found!!!</li>}
        {users.length > 0 && users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default HomePage
