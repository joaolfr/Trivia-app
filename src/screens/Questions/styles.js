import styled from "styled-components";
import { UnstyledText } from "../../components/UI";


export const Container = styled.View`
    flex:1;
    position: relative;
    padding: 15px;
    background-color:${props => props.theme.colors.primary_dark};
    align-items: center ;
`


export const CategoryText = styled(UnstyledText).attrs(() =>  ({type:'large'}))`
    color: ${props => props.theme.colors.white};
    margin-bottom: 20px ;
`;

export const QuestionWrapper = styled.View`
height: 100px ;
width:100% ;
margin: 20px 0 20px 0;
`

export const QuestionText = styled(UnstyledText).attrs(() =>  ({type:'big'}))`
    color: ${props => props.theme.colors.white};
`;


export const ButtonsWrapper = styled.View`
    width:100% ;
    margin-bottom: 40px;
`

export const OptionButton = styled.TouchableOpacity`
    width: 100% ;
    height:50px;
    margin-top: 20;
    border-radius: 10px;
    align-items:center;
    background-color:white;
    flex-direction:row;
    justify-content:center;
    
    `

export const OptionText = styled(UnstyledText).attrs(() =>  ({type:'max'}))`
    color: ${props => props.theme.colors.primary_dark};
`;


export const NextButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px ;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.secondary} ;
`

export const NextButtonText = styled(UnstyledText).attrs(() =>  ({type:'max'}))`
    color: ${props => props.theme.colors.white};
`;