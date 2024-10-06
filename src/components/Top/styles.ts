import styled from "styled-components";
import { cores } from "../../styles";

{/*
    background-color: ${cores.brancoNeve};
    */}
    
    export const Topo = styled.div`
    background-color: ${cores.brancoNeve};
    height:90px ;
    display: flex;
    padding-top: 0;
    align-items: center;
    margin-bottom: 0px;    
    width: 100%;
    margin: 0 auto;
    margin-top: 0%;
    justify-content: space-between;
`
export const Logotipo = styled.div`
    margin-left: 16px;
    padding-bottom: 2px;
    font-family: 'Tangerine', cursive;
    
`
export const Title = styled.h1`
    justify-content: center;
    font-family: 'Tangerine', cursive;
    font-size: 80px;
    font-weight: bold;    
    margin-left: 0px;
    margin-right: 320px;
`
export const Bag = styled.a`
    margin-right: 20px;
    text-decoration: none;
`
export const Service = styled.div`
    display: flex;    
    a{
        text-decoration: none;
        color: ${cores.preto};
        font-size: 20px;
    }
`
export const Card = styled.div`
    margin-left: 0.5%;
`

export const InfoCartao = styled.h4`
    color: ${cores.preto};
    font-size: 20px;
    margin-right: 150px;
    margin-top: 12px;
`
export const Cartao = styled.div`
    display: flex;

    img {
    }
`

