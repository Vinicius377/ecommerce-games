import { Container } from "./style"
import ItemProduct from "../item-product"
import { useContext } from "react"
import ProductsContext from "../../context/Products-Context"

function ItensList() {
  const products = useContext(ProductsContext)

  return (
    <Container role="list">
      {products &&
        products.map(product => (
          <ItemProduct product={product} key={product.id} />
        ))}
    </Container>
  )
}

export default ItensList
