import style from "styled-components"

export const Container = style.section`
    padding:10px;
    display:flex;
    border-radius:0 10px 10px 10px;
    box-shadow:-5px 5px 3px 0 rgba(256,256,256,0.4);
    background:#FFFFFF;
    transition:0.3s;
    :hover{
        transform:scale(1.03)
    }
    h1{
        font-size:1.4rem;
    }
    .ilustration{
        padding:5px;
        border-radius:8px;
        border:solid 0.5px rgba(0,0,0,0.5);
    }

    .infor-container{
        padding:10px;
        display:flex;
        flex-direction:column;
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
        font-size:1.01rem;
        font-weight:600;
    
        :hover{
            background:#ffffff;
            border:solid 1px #FF965A;
        }
    }
    .score-title{
        font-weight:bold;
        font-size:1.05rem;
    }
//    Media querys
@media(max-width:1075px) and (min-width:1018px){
    {
        font-size:0.9em;
    }
    h1{
        font-size:1.3em;
    }
}
@media(max-width:670px){
    .ilustration{
        width:40%;
    }
    {
        font-size:0.8em;
    }
    h1{
        font-size:1.3rem;
    }
}
@media(max-width:420px){
    button{
        font-size:1.1em;
    }
}
`
