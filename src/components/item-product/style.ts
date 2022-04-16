import style from "styled-components"

export const Container = style.div`
    padding:10px;
    display:flex;
    border-radius:0 10px 10px 10px;
    box-shadow:-5px 5px 3px 0 rgba(256,256,256,0.4);
    background:#FFFFFF;
    transition:0.3s;
    :hover{
        transform:scale(1.01)
    } 
    .infor-container{
        display:flex;
        flex-direction:column;
        margin-block:10px;
        justify-content:space-between;
        width:100%;
    }
    .infor-name:hover{
        -webkit-text-stroke: 0.2px black;
        color: #51e7f6;
        cursor:pointer;
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
