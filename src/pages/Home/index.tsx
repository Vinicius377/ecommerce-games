import ItensList from "../../components/itens-list"
import filters from "./FILTER_OPTIONS"
import { Container } from "./style"

import filter_icon from "../../assets/filters_icon.svg"
import { useState } from "react"

function Home() {
  const [showFilters, setShowFilters] = useState(true)
  function onShowFilters() {
    setShowFilters(prevSate => !prevSate)
  }
  return (
    <Container>
      <img
        src={filter_icon}
        alt="icone de filtro"
        className="filter-icon"
        onClick={onShowFilters}
        width="50"
      />
      <section
        className={`filter-container ${
          showFilters ? "filter-container_show" : "filter-container_hide"
        } `}
      >
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
