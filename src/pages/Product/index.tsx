import { useParams } from "react-router-dom"
import { useContext } from "react"

import ProductsContext from "../../context/Products-Context"
import CartContext from "../../context/Cart-Context"
import { increment } from "../../context/Cart-Context/actions"
import { Container } from "./style"
import cart_add_icon from "../../assets/cart-add-icon.svg"

function Product() {
  const { id } = useParams()
  const products = useContext(ProductsContext)
  const { dispatchCartCheckout } = useContext(CartContext)

  let product
  if (id) {
    product = products.find(product => product.id === Number(id))
  }
  const addItemOnCart = (id: number) => {
    if (dispatchCartCheckout) {
      dispatchCartCheckout(increment(id))
    }
  }
  return product ? (
    <Container>
      <img
        src={`/photos/${product.image}`}
        alt="ilustração do jogo"
        width={700}
        className="img-game"
      />
      <div className="infor-container">
        <h1>{product.name}</h1>
        <div className="infor-div">
          <div className="infor-price">
            <h2>R$ {product.price.toFixed(2)}</h2>
            <span>Score {product.score}</span>
          </div>
          <button onClick={() => addItemOnCart(Number(id))}>
            Adicionar <img src={cart_add_icon} width={40} />
          </button>
        </div>
      </div>
    </Container>
  ) : (
    <h1>Desculpe mas o produto não existe!</h1>
  )
}

export default Product
