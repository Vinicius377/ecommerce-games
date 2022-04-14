import styled from "styled-components"

export const Container = styled.tr`
  background: #ffffff;

  td {
    padding: 10px 15px;
  }
  .buttons-operator {
    display: flex;
    gap: 10px;
    button {
      width: 100%;
      cursor: pointer;
      background-color: #ff965a;
      border: solid 0.2px black;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 4px;
      font-size: 1.2rem;
      font-weight: 600;
      :hover {
        background: #ffffff;
        border: solid 1px #ff965a;
      }
    }
  }
`
