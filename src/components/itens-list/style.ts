import style, { keyframes } from "styled-components"

const animation = keyframes`
    0%{
        opacity:0;

    }
    100%{
        opacity:1;

    }
    
`
export const Container = style.section`
    display:grid;
    opacity:0;
    flex:1;
    grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
    gap:20px;
    animation:${animation} 1s 0.5s forwards;
`
