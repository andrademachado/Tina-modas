import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.section`
    background-color: ${cores.marrom};
    color: ${cores.preto};
    width: 100%;
    height:370px ;
    position: relative;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 0px;
    width: 960px;
`