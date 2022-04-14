import {
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
  useState,
  useEffect,
  useContext,
} from "react"
import CartReduce from "./reduce"
import ProductsContext from "../../context/Products-Context"
import CartCheckout from "../../types/cart.t"

interface Props {
  children: ReactNode
}

interface Action {
  type: string
  payload: {
    id: number
  }
}
interface Context {
  cartCheckout?: CartCheckout[]
  dispatchCartCheckout?: Dispatch<Action>
  total?: number
}

const CartContext = createContext<Context>({})

function CartContextProvider({ children }: Props) {
  const [cartCheckout, dispatchCartCheckout] = useReducer(CartReduce, [
    { count: 0, id: 0 },
  ])
  const [total, setTotal] = useState(0)
  const products = useContext(ProductsContext)

  useEffect(() => {
    setTotal(() => {
      let incrementedValue = 0
      cartCheckout.forEach(item => {
        const productById = products.findIndex(
          product => product.id === item.id
        )

        if (productById === -1) {
          return
        }
        incrementedValue =
          incrementedValue + products[productById].price * item.count
      })
      return incrementedValue
    })
  }, [cartCheckout])

  return (
    <CartContext.Provider value={{ total, cartCheckout, dispatchCartCheckout }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider }
export default CartContext
