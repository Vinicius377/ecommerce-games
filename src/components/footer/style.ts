import styled from "styled-components"

export const Container = styled.footer`
  background-color: #d2d7d8;
  bottom: 0;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  align-items: center;
  .footer-mesage {
    opacity: 0.2;
    align-self: flex-end;
  }
  a {
    font-size: 1.05rem;
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
  }
  .footer-middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`
