import { useContext } from "react"

import { Container } from "./style"
import ProductsContext from "../../context/Products-Context"
import CartContext from "../../context/Cart-Context"
import { increment, decrement } from "../../context/Cart-Context/actions"

import trash_icon from "../../assets/trash_icon.svg"
import plus_icon from "../../assets/plus_icon.svg"
import less_icon from "../../assets/less_icon.svg"
import { toast } from "react-toastify"

interface Props {
  informations: {
    id: number
    count: number
  }
}
function ItemCheckout({ informations }: Props) {
  const products = useContext(ProductsContext)
  const { dispatchCartCheckout, cartCheckout } = useContext(CartContext)
  const productById = products.find(product => product.id === informations.id)

  const addItem = (id: number) => {
    if (dispatchCartCheckout) {
      dispatchCartCheckout(increment(id))
    }
  }
  const removeItem = (id: number) => {
    if (dispatchCartCheckout) {
      dispatchCartCheckout(decrement(id))
      if (cartCheckout?.find(item => item.id == informations.id)?.count === 0) {
        toast.error(
          `${
            products.find(product => product.id === id)?.name
          } foi removido do carrinho!`
        )
      }
    }
  }
  const remove_item_icon =
    cartCheckout?.find(item => item.id == informations.id)?.count === 0
      ? trash_icon
      : less_icon

  return (
    <Container>
      <td>{productById?.name}</td>
      <td>R$ {productById?.price.toFixed(2)}</td>
      <td>{productById?.score}</td>
      <td>{informations.count}x</td>
      <td className="buttons-operator">
        <button onClick={() => addItem(informations.id)}>
          <img src={plus_icon} width={23}></img>
        </button>
        <button onClick={() => removeItem(informations.id)}>
          <img src={remove_item_icon} width={23}></img>
        </button>
      </td>
    </Container>
  )
}

export default ItemCheckout
