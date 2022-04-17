import types from "./types"
import { Reducer } from "react"
import CartCheckout from "../../types/cart.t"

interface Action {
  type: string
  payload: {
    id: number
  }
}

const CartReduce: Reducer<CartCheckout[], Action> = (
  state: CartCheckout[],
  action: Action
) => {
  let indexById = state.findIndex(product => product.id === action.payload.id)
  let countValue = 0

  if (indexById !== -1) {
    countValue = state[indexById].count
  } else {
    indexById = state.length
  }

  let newArrCart = [...state]
  switch (action.type) {
    case types.INCREMENT:
      newArrCart[indexById] = { id: action.payload.id, count: countValue + 1 }
      return newArrCart

    case types.DECREMENT:
      if (state[indexById].count < 1) {
        return state.filter(item => item.id !== action.payload.id)
      }

      newArrCart[indexById] = { id: action.payload.id, count: countValue - 1 }
      return newArrCart
    default:
      return state
  }
}
export default CartReduce
