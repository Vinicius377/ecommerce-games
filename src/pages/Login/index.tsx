import { useState } from "react"
import { Container } from "./style"

function Login() {
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input type="email" required placeholder="Email" />

        <input type="password" required placeholder="Senha" />

        <button>Entrar</button>
      </form>
    </Container>
  )
}

export default Login
