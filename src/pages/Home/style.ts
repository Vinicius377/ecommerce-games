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
  .filter-button{
    font-size: 1.05rem;
      padding: 10px;
      cursor:pointer;
      font-weight:500;
      border-radius: 8px;
      background-color: #54baf3;
      border: solid 0.5px transparent;
      :hover {
        background-color: #ffffff;
        border: solid 0.5px #54baf3;
      }
    }
  }
`
