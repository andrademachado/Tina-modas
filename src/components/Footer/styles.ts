import styled from "styled-components";
import { cores } from "../../styles";

export const Cartaz = styled.footer`
    background-color: ${cores.marrom};
    color: ${cores.marssala};
    width: 100%;
    height: 300px;
    position: relative;
    
    .container {
        display: flex;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        column-gap: 20px;
        justify-content: space-between;

    }
    
`
export const  LinkItem = styled.li`
    display: block;
    color: ${cores.marssala};
    margin-top: 4px;
    font-size: 16px;
`
export const Secao = styled.li`
    display: block;
    margin-left: 10px;
    margin-top: 20px;
`
export const Contexto = styled.p`
    font-size: 18px;
    margin-top:26px ;
`
export const Cop = styled.p`
    margin-left: 266px;
    margin-top: 35px;
    font-size: 14px;
`

export const Contato = styled.li`
    display: block;
    margin-left: 100px;
    margin-top: 20px;
`
export const Pagamento = styled.li`
    display: block;
    margin-left: 100px;
    margin-top: 20px;
`

export const Email = styled.p`
    margin-top: 10px;
`
export const Logo = styled.img`
margin-top: 30px;
margin-left: 14px;
margin-bottom: 0px;
`
export const LogoCard = styled.img`
margin-top: 2px;
margin-left: 2px;
margin-bottom: 0px;
align-items: center;
display: flex;
`

export const Card = styled.div`   
    display: flex;
    margin-top: 2px;
`

export const Cartao = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: 12px;
`

export const LogoSecao = styled.div`

    margin-top: 12px;
        display: block;
    border-radius: 10px;
`







{/*
    
    import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
    background-color: ${cores.marrom};
    color: ${cores.marssala};
    padding: 32px 0;
    display: flex;
`

export const SectionTitle = styled.h4`
    color: ${cores.marssala};
    font-weight: bold;
    font-size: 18px;
`
export const Links =  styled.ul`
    display:block;
    margin-top: 16px;
     margin-right: 16px;
    display: block;
    color: ${cores.marssala};
`
export const LinkItem = styled.li`
   
`

export const FooterSection = styled.nav`
    margin-bottom: 64px;
    
`


    */}