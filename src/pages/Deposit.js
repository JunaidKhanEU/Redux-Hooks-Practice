import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { depositAction } from '../store/balance/balanceActions'

const DepositPage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Deposit Page</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={() => dispatch(depositAction(10))}>Deposit $10</button>
    </div>
  )
}

export default DepositPage
