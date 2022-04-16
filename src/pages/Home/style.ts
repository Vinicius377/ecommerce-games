import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  gap: 40px;
  .filter-container fieldset {
    margin-block: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;
    border: none;
    legend {
      padding-block: 10px;
      font-size: 1.4rem;
      font-weight: bold;
    }
    label {
      margin-left: 7px;
    }
    input {
      margin-right: 5px;
    }
  }
`
