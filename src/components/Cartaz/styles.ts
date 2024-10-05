import styled from "styled-components";
import { cores } from "../../styles"; 

export const CartazContainer = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display :flex ;
    background-color: ${cores.brancoRose};
    color: ${cores.branco};    
`
export const Titulo  = styled.h2`
    font-size: 30px;
    margin-top: 28px;
    margin-left: 24px;
    margin-right: 24px;
    color: ${cores.preto};
`

export const SubTitulo = styled.h3`
    font-size: 20px;
    margin-top: 16px;
    margin-left: 36px;
    color: ${cores.preto};
`
export const Carro = styled.img`
    margin-top: 36px;
    margin-left: 100px;
`

export const ImgEsquerda = styled.img`
    margin-left: 216px;
`


{/*

código do style do banner com imagem de fundo

import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer =styled.button`
    border: 2px solid ${cores.verde};
    color:${cores.branco};
    background-color: ${cores.verde};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
    border: 2px solid ${cores.verde};
    color:${cores.branco};
    background-color: ${cores.verde};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
`

    */}
