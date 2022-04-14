import styled from "styled-components"

export const Container = styled.header`
  background: #d2d7d8;
  width: 100vw;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding-inline: 100px;
  a {
    margin-inline: 10px;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
  }
  nav {
    padding: 20px 50px;
    display: flex;
  }
  .account-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }
  .account-container:hover .account-modal {
    display: flex;
  }
  .account-modal {
    display: none;
    flex-direction: column;
    background: #ffffff;
    padding: 20px;
    gap: 20px;
    border: solid 0.4px black;
    position: absolute;
    left: 0;
    z-index: 100;
    top: 60px;
  }
`
