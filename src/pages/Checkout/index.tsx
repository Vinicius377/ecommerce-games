import ItemCheckout from "../../components/item-checkout"
import { Container } from "./style"
import { useContext } from "react"
import CartContext from "../../context/Cart-Context"

function Checkout() {
  const { cartCheckout, total } = useContext(CartContext)

  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Score</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {cartCheckout &&
          cartCheckout.map(item => (
            <ItemCheckout informations={item} key={item.id} />
          ))}
        <tr className="subtotal">
          <th>SubTotal:</th>
          <td>R$ {total?.toFixed(2)}</td>
        </tr>
      </tbody>
    </Container>
  )
}

export default Checkout
