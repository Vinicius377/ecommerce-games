import { useNavigate } from "react-router-dom"

import { Container } from "./style"
import notfound_icon from "../../assets/not_found_icon.svg"

function NotFound() {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="message">
        <h1>Desculpe mas não existe nenhum produto com esse id!</h1>
        <img
          src={notfound_icon}
          alt="icone de pagina não encontrado"
          width="100"
        />
      </div>
      <button onClick={() => navigate("/")}>Voltar a Home</button>
    </Container>
  )
}

export default NotFound
