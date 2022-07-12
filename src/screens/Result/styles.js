import styled from 'styled-components';
import { UnstyledText } from "../../components/UI";


export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme.colors.primary_dark};
    padding:20px;
`
export const ResultBox = styled.View`
    flex:1;
    width:90%;
    
    flex-direction:row; 
    align-items: center;
    justify-content: center;
`
export const ScoreText = styled(UnstyledText)`
    color: ${props => props.error ? 'red' : props.theme.colors.secondary};
    font-size: 20px;
    font-weight: bold ;
    
`

export const QuestionsList = styled.ScrollView`
    
`
export const OptionText = styled(UnstyledText)`
    color:${props => props.theme.colors.white};
    margin: 10px 0 10px 0 ;
    font-size: 16px ;

`

export const RemakeButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px ;
    border-radius:10px ;
    background: ${props => props.theme.colors.secondary};
    align-items: center ;
    justify-content:center ;
    margin: 10px 0 10px 0;
`

export const ButtonText = styled(UnstyledText).attrs(() => ({
    type:'max',
    color:'white'
}))``