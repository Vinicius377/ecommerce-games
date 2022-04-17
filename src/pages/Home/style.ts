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
  .filter-icon{
    display:none ;
    background-color:#ffffff;
    padding:10px;
    border-radius:50%;
    cursor:pointer ;
    position:relative ;
    :hover{
     
      background-color:#d2d7d8;
    }
  }
  .filter-container_show.filter-container{
    display: block ;
  }
  ..filter-container_hide.filter-container{
    display:none;
  }
  /* Media Queries */
  @media(max-width:563px){
        .filter-container{
          display:none ;
          position:absolute ;
          width:100vw ;
          min-height: 100vh;
          z-index:100;
          background-color:#05121A;
          left:0; 
          top:130px; 
          margin:0;
          padding-inline:20px;
        }
        .filter-icon{
          display:block;
        }
        {
          flex-direction:column;
          gap:10px
        }
      }
`
