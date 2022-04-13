import style from "styled-components"

export const Container = style.div`
    padding:10px;
    display:flex;
    border-radius:0 10px 10px 10px;
    box-shadow:-4px 4px 7px 0 rgba(0,0,0,0.4);
    background:#ffffff;
    .infor{
        display:flex;
        flex-direction:column;
        margin-block:10px;
        justify-content:space-between;
        width:100%;
    }
    button{
        cursor:pointer;
        background-color:#FF965A;
        border:solid 0.2px black;
        border-radius:15px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        padding:4px;
        font-size:1.1rem;
        font-weight:500;
    
        :hover{
            background:#ffffff;
            border:solid 1px #FF965A;
        }
    }
    .score-title{
        font-weight:bold;
        font-size:1.05rem;
    }
   
`
