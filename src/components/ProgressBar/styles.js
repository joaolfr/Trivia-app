import styled from "styled-components";
import { UnstyledText } from "../UI";

export const Container = styled.View`
    flex-direction: row ;
    align-items: center ;
`

export const ProgressContainer = styled.View`
    width: 80% ;
    height: 30px ;
    background-color: ${props => props.theme.colors.white} ;
    border-radius: 15px;
    margin: 10px 0 10px 0 ;
    justify-content:center ;
`

export const CountingText = styled(UnstyledText).attrs(()=>({type:'max'}))`
    color: ${props => props.theme.colors.white};
    margin-left: 10px ;
`