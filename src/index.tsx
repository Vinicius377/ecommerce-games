import React from "react"
import ReactDOM from "react-dom"
import { Global } from "./style/Style.global"
import App from "./App"
import { CartContextProvider } from "./context/Cart-Context"
import { ProductsContextProvider } from "./context/Products-Context"

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
