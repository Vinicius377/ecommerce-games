import ItensList from "../../components/itens-list"
import Carrousel from "../../components/carrousel"
import filters from "./FILTER_OPTIONS"
import { Container } from "./style"

import filter_icon from "../../assets/filters_icon.svg"
import { useState } from "react"

function Home() {
  const [showFilters, setShowFilters] = useState(false)
  function onShowFilters() {
    setShowFilters(prevSate => !prevSate)
  }
  return (
    <div>
      <Carrousel />
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
            <fieldset key={filter.title}>
              <legend>{filter.title}</legend>
              {filter.options.map(option => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name={filter.title}
                    value={option.value}
                  />
                  {option.label}
                </label>
              ))}
            </fieldset>
          ))}
          <button className="filter-button">Aplicar</button>
        </section>
        <ItensList />
      </Container>
    </div>
  )
}

export default Home
