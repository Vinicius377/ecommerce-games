import { createContext, ReactNode, useReducer, Dispatch } from "react"
import CartReduce from "./reduce"

interface Props {
  children: ReactNode
}
interface CartCheckout {
  id?: number
  count?: number
}
interface Reducer {
  type: string
  payload: CartCheckout[]
}
interface Context {
  cartCheckout?: CartCheckout
  dispatchCartCheckout?: Dispatch<Reducer>
}

const CartContext = createContext<Context>({})

function CartContextProvider({ children }: Props) {
  const [cartCheckout, dispatchCartCheckout] = useReducer(CartReduce, {})

  return (
    <CartContext.Provider value={{ cartCheckout, dispatchCartCheckout }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider }
export default CartContext
