import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useContext } from "react"

import ProductsContext from "../../context/Products-Context"
import CartContext from "../../context/Cart-Context"
import { increment } from "../../context/Cart-Context/actions"
import { Container } from "./style"
import cart_add_icon from "../../assets/cart-add-icon.svg"
import NotFound from "../../components/notfound-product"

function Product() {
  const { id } = useParams()
  const products = useContext(ProductsContext)
  const { dispatchCart } = useContext(CartContext)

  let product
  if (id) {
    product = products.find(product => product.id === Number(id))
  }
  const addItemOnCart = (id: number) => {
    if (dispatchCart) {
      toast.success(
        `${
          products.find(product => product.id === id)?.name
        } foi adicionado ao carrinho!`
      )
      dispatchCart(increment(id))
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
        <h2>Descrição</h2>
        <section className="describe-container">
          Descrição do produto aqui
        </section>
      </div>
    </Container>
  ) : (
    <NotFound />
  )
}

export default Product
