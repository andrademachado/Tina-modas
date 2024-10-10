import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
    background-color: ${cores.marrom};
    color: ${cores.marssala};
    padding: 32px 0;
`

export const SectionTitle = styled.h4`
    color: ${cores.marssala};
    font-weight: bold;
    font-size: 14px;
`
export const Links =  styled.ul`
    display: flex;
    margin-top: 16px;
`
export const Link = styled.a`
    color: ${cores.marssala};
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`

