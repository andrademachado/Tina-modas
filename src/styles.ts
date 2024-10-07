import styled, { createGlobalStyle } from "styled-components";

//Variávei das cores do todo o Projeto
export const cores = {
    brancoNeve:'#fff',
    branco:' #F9F9F9',
    brancoRose:' #F1EBE9',
    cinzaclaro: '#DCD2D3',
    marssala:'#6b141b',
    preto:' #050404',    
    CinzaEscuro:'#907671',
    Cinza:'#AC9692',
    CinzaBranco: '#C2AEA9',
    marrom:'#d2bdb6' ,   
    verde:'#3cc165',
    rosa:'#E7A8A8',
    concha:'#e4dbd5',
    brancoazulado:'#EFEFEF'
}

//reset do estilo global
export const GlobalCss = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    
    body {
        background-color: ${cores.branco};
        color: ${cores.preto};
        padding-top:  20px;
    }
    
    //prendendo o layout no container e em seguida foi aplicado o container no App
    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`

