import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import DepositPage from './pages/Deposit'
import HomePage from './pages/Home'
import WithdrawPage from './pages/Withdraw'

function App () {
  return (
    <div className='App'>
     Redux with Hooks
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ padding: '10px' }}>
          <NavLink exact to='/' activeStyle={{ color: 'green' }}>Home</NavLink>
        </li>
        <li style={{ padding: '10px' }}>
          <NavLink exact to='/deposit' activeStyle={{ color: 'green' }}>Deposit</NavLink>
        </li>
        <li style={{ padding: '10px' }}>
          <NavLink exact to='/withdraw' activeStyle={{ color: 'green' }}>Withdraw</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' render={(routerProps) => <HomePage {...routerProps} />} />
        <Route exact path='/deposit' render={(routerProps) => <DepositPage {...routerProps} />} />
        <Route exact path='/withdraw' render={(routerProps) => <WithdrawPage {...routerProps} />} />
      </Switch>
    </div>
  )
}

export default App
