import styled from "styled-components";
import { cores } from '../../styles'

export const Container = styled.section`
    background-color: ${cores.branco};

`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
`
export const Card = styled.div`
    display: flex;
    margin-left: 50px;
    margin-bottom: 4px;
    
    h2 {
        margin-top: 12px;
        font-size: 24px;
        
    }
`
export const PaguePix = styled.div`
    display: flex;
    margin-right: 55px;

    h2 {
        margin-top: 8px;
        font-size: 24px;
    }
`