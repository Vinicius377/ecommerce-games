import styled from "styled-components"

export const Container = styled.form`
  background: #ffffff;
  padding: 23px;
  width: 70%;
  margin-inline: auto;
  box-shadow: -5px 5px 7px 0 rgba(256, 256, 256, 0.4);
  form {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      font-size: 1.2rem;
      outline: none;
      border: none;
      border-bottom: solid 2px #eaeaea;
      padding: 10px;
      :focus {
        border-bottom: solid 2px #84e1ff;
      }
    }
  }
`
