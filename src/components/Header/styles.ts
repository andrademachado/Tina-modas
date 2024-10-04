import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    background-color: ${cores.cinzaclaro};
    padding: 28px;
    margin-bottom: 0px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: ${cores.marssala};
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        //atenção essa margin-left é oespaçamento dos links pode ser que seja necessário reestilzar
        margin-left: 0%;
        border-right: 200px;
    }
`
//Limks de menu de seções do Header = distanciaentre os intens e o logo
export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`
export const LinkItem = styled.li`
    margin-right: 48px;
`



