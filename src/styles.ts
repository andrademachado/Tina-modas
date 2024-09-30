import { createGlobalStyle } from "styled-components";

//Variávei das cores do todo o Projeto
const cores = {
    branco:' #F9F9F9',
    marssala:'#6b141b',
    preto:' #050404',
    cinzaclaro:'#DCD2D3',
    CinzaEscuro:'#907671'
}

//reset do estilo global
export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.branco};
        color: ${cores.marssala};
    }
`


