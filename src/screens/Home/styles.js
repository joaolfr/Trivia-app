import styled from "styled-components";
import { UnstyledText } from "../../components/UI";

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme.colors.primary_dark};
    padding:20px;
`
export const NormalText = styled(UnstyledText).attrs(() => ({type:'large'}))`
    color: white;
    margin: 90px 0 0 0 ;

`

export const StartButton = styled.TouchableOpacity`
    width: 100% ;
    height: 50px;
    align-items: center ;
    justify-content: center;
    margin-top: 20px ;
    border: 1px solid ${props => props.theme.colors.white} ;
    border-radius: 10px ;
`

export const TextButton = styled(UnstyledText).attrs(() => ({
    type:'max'
}))`
    color: white;
`