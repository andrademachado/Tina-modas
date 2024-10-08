import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.section`
    background-color: ${cores.marrom};
    color: ${cores.preto};
    height: 370px;
    position: relative;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 32px;
    
`
export const Car = styled.img`
    margin-top: 10px;
    margin-left: 70px;
    
`

export const Frete  = styled.li`
    margin-top: 30px;
    margin-left: 0px;
`
export const Title = styled.h2`
    font-size: 30px;
    display: flex;
    margin-top: 10px;
    white-space: nowrap;
`


export const Botao = styled.div`
    margin-top: 100px;
    margin-left: 50PX;
`
export const Frase = styled.p`
    margin-top: 60px;
    white-space: nowrap;
`



{/*
    import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const CartazContainer = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display :flex ;
    background-color: ${cores.brancoazulado};
    color: ${cores.preto};


   

`
export const ImgEsquerda = styled.img`
    margin-left: 216px;
`

export const Titulo = styled.div`
    margin-top: 50px;
    display: block;
    font-size: 14px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 80px;
`
export const CardCenter =styled.div`

`
export const CardCar = styled.img`
    margin-top: 20px;
    justify-content: center;
    margin-left: 34px;
`
export const Title = styled.h2`
margin-left: 16px;
`

export const Subtitle =styled.h2`
    display: block;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 40px;
    justify-content: center;
`

export const Acionar = styled.div`
    margin-top: 48px;
    margin-left: 100px;
`
export const Text =styled.p`
    margin-top: 2px;
    margin-left: 30px;
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