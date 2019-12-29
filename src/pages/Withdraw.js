import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withdrawAction } from '../store/balance/balanceActions'

const WithdrawPage = () => {
  const balance = useSelector(state => state.balanceReducer.balance)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Withdraw Page</h1>
      <h2>Balance : {balance}</h2>
      <button onClick={() => dispatch(withdrawAction(10))}>Withdraw $10</button>
    </div>
  )
}

export default WithdrawPage
