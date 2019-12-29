import { DEPOSIT, WITHDRAW } from './balanceConstant'

const depositAction = (payload) => {
  return {
    type: DEPOSIT,
    payload: payload
  }
}

const withdrawAction = (payload) => {
  return {
    type: WITHDRAW,
    payload: payload
  }
}

export {
  depositAction,
  withdrawAction
}
