import { useParams } from "react-router-dom"
import ProductsContext from "../../context/Products-Context"
import { useContext } from "react"

import { Container } from "./style"

function Product() {
  const { id } = useParams()
  const products = useContext(ProductsContext)
  let product
  if (id) {
    product = products.find(product => product.id === Number(id))
  }

  return product ? (
    <Container>
      <img
        src={`/photos/${product.image}`}
        alt="ilustração do jogo"
        width={400}
      />
      <div className="informations">
        <h1>{product.name}</h1>
        <span>R$ {product.price.toFixed(2)}</span>
        <span>Score {product.score}</span>
      </div>
    </Container>
  ) : (
    <h1>Desculpe o produto não existe!</h1>
  )
}

export default Product
