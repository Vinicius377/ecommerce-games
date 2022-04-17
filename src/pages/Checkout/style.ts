import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  table {
    width: 100%;
    text-align: left;
    gap: 10px;
    color: #ffffff;
    font-size: 1.15rem;
    .subtotal {
      font-size: 1.2rem;
    }
  }
  .button-buy {
    width: 100%;
    cursor: pointer;
    background-color: #ff965a;
    border: solid 0.2px black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px ;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: 600;
    :hover {
      background-color: #ffffff;
      border: solid 1px #ff965a;
    }
    :disabled{
      background-color: #ffffff;
      border: solid 1px #ff965a;
      cursor:auto;
    }
`
