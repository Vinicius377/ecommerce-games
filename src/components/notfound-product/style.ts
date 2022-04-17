import styled from "styled-components"

export const Container = styled.div`
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  button {
    margin: 20px auto;
    padding: 20px;
    border: solid 1px black;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      backdrop-filter: brightness(0.9);
    }
  }
`
