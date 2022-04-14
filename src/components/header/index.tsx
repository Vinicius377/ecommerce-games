import { Container } from "./style"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/Cart-Context"
import { useNavigate } from "react-router-dom"

import acount_img from "../../assets/account_avatar.svg"
import arrow_down from "../../assets/arrow-down-icon.svg"
import cartIcon from "../../assets/cart_icon.svg"
import searchIcon from "../../assets/search_icon.svg"

function Header() {
  const { total } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <div
          className="subtotal-container"
          onClick={() => navigate("/checkout")}
        >
          <h2>R$ {total?.toFixed(2)}</h2>
          <img src={cartIcon} alt="cart-icon" width={30} />
        </div>
      </nav>
      <div role="searchbox" className="search-box">
        <input
          type="text"
          role="search"
          placeholder="Pesquise algum jogo aqui!"
        />
        <img src={searchIcon} alt="search_icon" width={30} />
      </div>
      <div className="account-container">
        <img src={arrow_down} alt="arrow_down" />
        <img src={acount_img} alt="account_img" width={40} />
        <div className="account-modal">
          <span>Fazer login </span>
          <span>Cadastrar</span>
        </div>
      </div>
    </Container>
  )
}

export default Header
