import { Container } from "./style"

function Footer() {
  return (
    <Container>
      <div>
        <span>Feito com ❤ por </span>
        <a href="https://github.com/Vinicius377" target="_blank">
          Vinicius
        </a>
      </div>
      <div className="footer-middle">
        <span>
          E-commerce criado como proposta de desafio feito pela empresa{" "}
          <a
            href="https://www.supera.com.br/"
            target="_blank"
            className="footer-company"
          >
            Supera Inovação em Tecnologia
          </a>
        </span>
        <a
          href="https://github.com/Vinicius377/ecommerce-games"
          target="_blank"
        >
          Link do repositório
        </a>
      </div>
      <span className="footer-mesage">Me contrata Supera💛</span>
    </Container>
  )
}
export default Footer
