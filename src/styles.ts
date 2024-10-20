import styled, { createGlobalStyle } from "styled-components";

//Variávei das cores do todo o Projeto
export const cores = {
    brancoNeve:'#fff',
    branco:' #F9F9F9',
    Rose:' #F1EBE9',
    RosePalha:'#f1ece9',
    cinzaclaro: '#DCD2D3',
    cinzaPlatina:'#cccccc',
    rosaChic:'rgba(232,200,189,255)',
    cinzaMedio:'rgba(216,218,217,255)',
    marssala:'#6b141b',
    preto:' #050404',    
    CinzaEscuro:'#907671',
    Cinza:'#AC9692',
    CinzaBranco: '#C2AEA9',
    marrom:'#d2bdb6' ,   
    verde:'#3cc165',
    rosa:'#E7A8A8',
    concha:'#e4dbd5',
    brancoazulado:'#EFEFEF',
    palha:'#f1ece3',
    bege:'#c28b74'
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
        text-decoration: none;
    }

    
    body {
        background-color: ${cores.branco};
        color: ${cores.preto};
        padding-top:  26px;
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

