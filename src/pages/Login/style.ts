import styled from "styled-components"

export const Container = styled.form`
  background: #ffffff;
  padding: 23px;
  width: 60%;
  margin-inline: auto;
  border-radius: 10px;
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
  button{
    font-size: 1.05rem;
      padding: 10px;
      margin:10px 100px;
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
  .spans-container{
    display:flex ;
    flex-direction:column;
    gap:5px;
    span{
      font-size:1.02rem;
      opacity:0.75 ;
    }
    a{
      color:#54baf3;
      text-decoration:none;
      :hover{
        border-bottom:solid 0.5px #54baf3;
      }
    }
  }
`
