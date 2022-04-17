import { createContext, ReactNode } from "react"
import Product from "../../types/product.t"
import PRODUCTS_JSON from "./products.json"

interface Props {
  children: ReactNode
}

const ProductsContext = createContext<Product[]>([])
export default ProductsContext

function ProductsContextProvider({ children }: Props) {
  return (
    <ProductsContext.Provider value={PRODUCTS_JSON}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContextProvider }
