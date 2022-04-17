import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "./style"
import CartContext from "../../context/Cart-Context"

import acount_img from "../../assets/account_avatar.svg"
import arrow_down from "../../assets/arrow-down-icon.svg"
import cart_icon from "../../assets/cart_icon.svg"
import search_icon from "../../assets/search_icon.svg"

function Header() {
  const { total } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <Container>
      <nav role="menu">
        <NavLink to="/" role="menuitem">
          Home
        </NavLink>
        <NavLink to="/checkout" role="menuitem">
          Checkout
        </NavLink>
        <div
          className="subtotal-container"
          onClick={() => navigate("/checkout")}
        >
          <h2>R$ {total?.toFixed(2)}</h2>
          <img src={cart_icon} alt="icone de carrinho de compra" width={30} />
        </div>
      </nav>
      <div role="searchbox" className="search-box">
        <input
          type="text"
          role="search"
          placeholder="Pesquise algum jogo aqui!"
        />
        <img src={search_icon} alt="botão de busca" width={30} />
      </div>
      <div className="account-container">
        <img src={arrow_down} alt="flecha para baixo" />
        <img src={acount_img} alt="imagem padrão de perfil" width={40} />
        <div className="account-modal">
          <Link to="/login">Fazer login </Link>
          <span>ou</span>
          <Link to="/signin">Cadastrar</Link>
        </div>
      </div>
    </Container>
  )
}

export default Header
