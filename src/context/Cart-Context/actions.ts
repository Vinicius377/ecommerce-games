import types from "./types"

function increment(id: number) {
  return {
    type: types.INCREMENT,
    payload: {
      id,
    },
  }
}
function decrement(id: number) {
  return {
    types: types.DECREMENT,
    payload: {
      id,
    },
  }
}

export { increment, decrement }
