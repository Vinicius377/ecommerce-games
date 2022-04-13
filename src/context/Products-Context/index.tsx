import { createContext, ReactNode, useEffect, useState } from "react"
import Product from "../../types/product.t"

interface Props {
  children: ReactNode
}

const ProductsContext = createContext<Product[]>([])

export default ProductsContext

function ProductsContextProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ;(async function () {
      const promise = await fetch(
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T104910Z&X-Amz-Expires=86400&X-Amz-Signature=e4c66f0857c25f171a7ca211f093cd0f5ac1f25ed66e31980e65e61263531d7b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject"
      )
      const result: Product[] = await promise.json()
      setProducts(result)
    })()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContextProvider }
