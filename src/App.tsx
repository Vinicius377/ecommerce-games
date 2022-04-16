import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Header from "./components/header"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Login from "./pages/Login"
import { Main, Container } from "./style/App.style"

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Main>
      </BrowserRouter>
      <ToastContainer />
    </Container>
  )
}

export default App
