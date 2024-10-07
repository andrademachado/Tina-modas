import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
    background-color:${cores.brancoRose};
    border-radius: 8px;
    padding: 8px;
    cor:${cores.preto}

    ${TagContainer} {
        margin-right: 8px;
    }
`
export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
    color:${cores.preto};
`
export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;    
`