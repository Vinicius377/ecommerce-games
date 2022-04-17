import { Container } from "./style"

function SignIn() {
  return (
    <Container>
      <h1>Criar uma conta</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" required placeholder="Nome" />
        <input type="text" required placeholder="CPF" />
        <input type="text" required placeholder="Telefone" />
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Senha" />
        <input type="password" required placeholder="Confirmar senha" />
        <button>Criar conta</button>
      </form>
    </Container>
  )
}

export default SignIn
