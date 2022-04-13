import { Container } from "./style"
import img from "../../assets/terra-media-sombras-de-mordor.png"
import cartIcon from "../../assets/cart-icon.svg"
import Product from "../../types/product.t"

interface Props {
  product: Product
}

function ItemProduct({ product }: Props) {
  const formatedPrice = product.price
  return (
    <Container>
      <img src={`/photos/${product.image}`} width="200" />
      <div className="infor">
        <h1>{product.name}</h1>
        <div className="infor-price">
          <h2>R$ {formatedPrice}</h2>
          <span>
            <span className="score-title">Score</span> {product.score}
          </span>
        </div>
        <button>
          Adicionar <img src={cartIcon} alt="cart-icon" width="32" />
        </button>
      </div>
    </Container>
  )
}

export default ItemProduct
