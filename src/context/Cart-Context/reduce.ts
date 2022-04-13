import types from "./types"

interface Action {
  type: string
  payload: {
    id: number
  }
}
interface State {
  id: number
  count: number
}

export default function CartReduce(state: State[], action: Action) {
  const indexOfId = state.findIndex(product => product.id == action.payload.id)
  switch (action.type) {
    case types.INCREMENT:
      return [...state, (state[indexOfId].count += 1)]
    case types.DECREMENT:
      if (state[indexOfId].count < 0) {
        return state
      }
      return [...state, (state[indexOfId].count -= 1)]
  }
}
