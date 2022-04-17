import ItensList from "../../components/itens-list"
import filters from "./FILTER_OPTIONS"
import { Container } from "./style"

function Home() {
  return (
    <Container>
      <section className="filter-container">
        {filters.map(filter => (
          <fieldset>
            <legend>{filter.title}</legend>
            {filter.options.map(option => (
              <label>
                <input type="radio" name={filter.title} value={option.value} />
                {option.title}
              </label>
            ))}
          </fieldset>
        ))}
        <button className="filter-button">Aplicar</button>
      </section>
      <ItensList />
    </Container>
  )
}

export default Home
