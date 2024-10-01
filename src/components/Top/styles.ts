import styled from "styled-components";
import { cores } from "../../styles";

export const Topo = styled.div`
    background-color: ${cores.branco};
    display: flex;
    padding-top:0;
    align-items: center;
    margin-bottom: 8px;    
    width: 100%;
    margin: 0 auto;
    margin-top: 0%;
    justify-content: space-between;
`
export const Logotipo = styled.div`
    margin-left: 40px;
    padding-bottom: 2px;
    img{        
        border-radius: 50%;
    }
`
export const Title = styled.h1`
    justify-content: center;
    font-family: 'Tangerine', cursive;
    font-size: 4em;
    font-weight: bold;
`
export const Bag = styled.a`
    margin-right: 40px;
    text-decoration: none;
`

