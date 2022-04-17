import { Container, CarrouselContainer } from "./style"
import { useContext, useRef } from "react"
import ProductsContext from "../../context/Products-Context"
import { useNavigate } from "react-router-dom"

function Carrousel() {
  const navigate = useNavigate()
  const products = useContext(ProductsContext)
  const refCarrousel = useRef<HTMLDivElement | null>(null)

  const onNavigate = (id: number) => {
    navigate(`/product/${id}`)
  }
  const onCarousselNavigate = (type: string) => {
    const widthScreen = window.innerWidth
    if (refCarrousel.current) {
      switch (type) {
        case "next":
          refCarrousel.current.scrollLeft += widthScreen / 2

          break
        case "prev":
          refCarrousel.current.scrollLeft -= widthScreen / 2
          break
      }
    }
  }
  return (
    <Container>
      <CarrouselContainer ref={refCarrousel}>
        {products.slice(4).map(product => (
          <div
            className="carrousel-item"
            onClick={() => onNavigate(product.id)}
            key={product.id}
          >
            <div className="carrousel-img">
              <img src={`/photos/${product.image}`} />
            </div>
            <div className="carrousel-infors">
              <h1>{product.name}</h1>
              <h2>R$ {product.price.toFixed(2)}</h2>
              <span>Score {product.score}</span>
            </div>
          </div>
        ))}
      </CarrouselContainer>
      <div className="buttons-container">
        <button onClick={() => onCarousselNavigate("prev")}>prev</button>
        <button onClick={() => onCarousselNavigate("next")}>next</button>
      </div>
    </Container>
  )
}

export default Carrousel
