import { Container } from "./style"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/Cart-Context"

import acount_img from "../../assets/account_avatar.svg"
import arrow_down from "../../assets/arrow-down-icon.svg"

function Header() {
  const { total } = useContext(CartContext)
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <h1>R${total?.toFixed(2)}</h1>
      </nav>
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
