import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    margin-top: 0%;
    margin-bottom: 50%;
    width: 100%;
    height: 650px;     
    display: block;
    background-repeat: no-repeat;
    background-position: 48%;
    background-size: contain;
`
export const Titulo = styled.h2`
    margin-top: 0%;
    font-size: 56px;
    font-weight:  bold;
    max-width: 450px;
    margin-left: 6px;
    color: ${cores.preto};
`

export const Texto = styled.h3`
        
        margin-top: 28px;
        margin-right: 4%;
        margin-left: 6px;
        border-radius: 6px;
        font-size: 26px;
        font-weight:  bold;
        max-width: 300px;        
        color: ${cores.preto};
`
export const Iconepix = styled.a`
    
`
export const Subtitulo = styled.h4`
display:flex;
margin-top: 240px;
margin-right: 0%;
margin-left: 700px;
justify-content: space-around;

font-size: 32px;
font-weight:  bold;
max-width: 300px;
color: ${cores.preto};


`