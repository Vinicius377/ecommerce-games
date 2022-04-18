import styled from "styled-components"

export const Container = styled.section`
  background: #ffffff;
  display: flex;
  box-shadow: -5px 5px 8px 0 rgba(256, 256, 256, 0.4);
  padding: 40px;
  .img-game {
    padding: 20px;
    box-shadow: -7px 7px 12px 0 rgba(0, 0, 0, 0.4);
    border:solid 0.2px rgba(0,0,0,0.2);
    border-radius:8px;
  }
  .infor-container {
    margin-inline: 40px;
    width: 100%;
    h1 {
      font-size: 2.2rem;
    }
    .describe-container{
    background-color:#D2D7D8;
    margin-inline:10px;
    padding:10px;
  }
  }
  .infor-price {
    display: flex;
    flex-direction: column;
    flex: 6;
    h2 {
      font-size: 1.8rem;
    }
  }
  .infor-div {
    margin: 20px;
    display: flex;
    align-items: center;
   
    button{
        cursor:pointer;
        background-color:#FF965A;
        border:solid 0.2px black;
        border-radius:15px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        padding:5px;
        font-size:1.1rem;
        font-weight:500;
        flex:4 ;
        :hover{
            background:#ffffff;
            border:solid 1px #FF965A;
        }
  }
 @media(max-width:860px){
  .infor-container{
    margin-inline:20px;
    h1{
      font-size:1em;
    }
  }
   h2{
     font-size:1.3rem;
   }
 }
 @media(max-width:630px){
   {
     display: block;
   }
}
@media(max-width:720px){
  
 }
`
