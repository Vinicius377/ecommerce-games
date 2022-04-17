import { NavLink, Link } from "react-router-dom"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container, MenuHamb } from "./style"
import CartContext from "../../context/Cart-Context"

import account_img from "../../assets/account_avatar.svg"
import arrow_down from "../../assets/arrow-down-icon.svg"
import cart_icon from "../../assets/cart_icon.svg"
import search_icon from "../../assets/search_icon.svg"

function Header() {
  const { total } = useContext(CartContext)
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(true)

  const onNavigate = () => {
    navigate("/checkout")
  }
  return (
    <Container openMenu={showMenu}>
      <div
        className="menu-bar"
        onClick={() => setShowMenu(prevState => !prevState)}
      >
        <MenuHamb active={showMenu} />
      </div>

      <nav role="menu">
        <NavLink to="/" role="menuitem">
          Home
        </NavLink>
        <NavLink to="/checkout" role="menuitem">
          Checkout
        </NavLink>
        <div className="subtotal-container" onClick={onNavigate}>
          <h2>R$ {total?.toFixed(2)}</h2>
          <img src={cart_icon} alt="icone de carrinho de compra" width={30} />
        </div>
      </nav>
      <div></div>
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
        <img src={account_img} alt="imagem padrão de perfil" width={40} />
        <div className="account-modal">
          <Link to="/login">Fazer login </Link>
          <span>ou</span>
          <Link to="/signin">Criar uma conta</Link>
        </div>
      </div>
    </Container>
  )
}

export default Header
