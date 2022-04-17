import { Link } from "react-router-dom"
import { Container } from "./style"

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Senha" />
        <div className="spans-container">
          <span>
            Esqueceu uma senha? <a href="">Clique aqui</a>
          </span>
          <span>
            Não tem uma conta? <Link to="/signin">Clique aqui</Link>
          </span>
        </div>
        <button>Entrar</button>
      </form>
    </Container>
  )
}

export default Login
