import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Container } from "./style"
import cart_add_icon from "../../assets/cart-add-icon.svg"

import Product from "../../types/product.t"
import { increment } from "../../context/Cart-Context/actions"
import cartContext from "../../context/Cart-Context"
import ProductContext from "../../context/Products-Context"

interface Props {
  product: Product
}

function ItemProduct({ product }: Props) {
  const { dispatchCart } = useContext(cartContext)
  const products = useContext(ProductContext)
  const navigate = useNavigate()

  const addItemOnCart = (id: number) => {
    if (dispatchCart) {
      dispatchCart(increment(id))
      toast.success(
        `${
          products.find(product => product.id === id)?.name
        } foi adicionado ao carrinho!`
      )
    }
  }

  return (
    <Container role="listitem">
      <img
        src={`/photos/${product.image}`}
        width="200"
        className="ilustration"
        alt="ilustração do jogo"
      />
      <div className="infor-container">
        <h1
          className="infor-name"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h1>
        <div>
          <h2>R$ {product.price.toFixed(2)}</h2>
          <span>
            <span className="score-title">Score</span> {product.score}
          </span>
        </div>
        <button onClick={() => addItemOnCart(product.id)}>
          Adicionar <img src={cart_add_icon} alt="cart-icon" width="32" />
        </button>
      </div>
    </Container>
  )
}

export default ItemProduct
