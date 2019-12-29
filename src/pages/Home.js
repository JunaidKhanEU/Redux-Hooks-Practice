import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = (props) => {
  const balance = useSelector((state) => state.balanceReducer.balance)
  console.log('balance', balance)
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Balance : {balance}</h2>
    </div>
  )
}

export default HomePage
