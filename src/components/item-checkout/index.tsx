import { Container } from "./style"
import { useContext } from "react"
import ProductsContext from "../../context/Products-Context"
import CartContext from "../../context/Cart-Context"
import { increment, decrement } from "../../context/Cart-Context/actions"

interface Props {
  informations: {
    id: number
    count: number
  }
}
function ItemCheckout({ informations }: Props) {
  const products = useContext(ProductsContext)
  const { dispatchCartCheckout } = useContext(CartContext)
  const productById = products.find(product => product.id === informations.id)

  const addItem = (id: number) => {
    if (dispatchCartCheckout) {
      dispatchCartCheckout(increment(id))
    }
  }
  const removeItem = (id: number) => {
    console.log(decrement(id))
    if (dispatchCartCheckout) {
      dispatchCartCheckout(decrement(id))
    }
  }
  return (
    <Container>
      <td>{productById?.name}</td>
      <td>R$ {productById?.price}</td>
      <td>{productById?.score}</td>
      <td>{informations.count}x</td>
      <td className="buttons-operator">
        <button onClick={() => removeItem(informations.id)}>+</button>
        <button onClick={() => addItem(informations.id)}>-</button>
      </td>
    </Container>
  )
}

export default ItemCheckout
