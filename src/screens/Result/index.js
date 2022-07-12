import React from "react";
import {Container, QuestionsList, ScoreText, ResultBox, RemakeButton, ButtonText, OptionText} from './styles';

const Results = ({ route, navigation }) => {

    const { score, questions, correctAnswers, restartQuiz } = route.params;


    return(
  
        <Container  >
            <ResultBox >
                <ScoreText>You scored: </ScoreText>
                <ScoreText>{score}</ScoreText>
                <ScoreText>/ {questions.length}</ScoreText>
            </ResultBox>
            <QuestionsList >
                {questions.map((item, index) => {
                    return(
                        <OptionText key={index}>
                            {correctAnswers.includes(index) ? 
                            <ScoreText> + </ScoreText> : 
                            <ScoreText error={true}> - </ScoreText>} 
                            {item.question}
                        </OptionText>
                    )
                })}
            </QuestionsList>

            {/* retry button */}

            <RemakeButton onPress={() =>(restartQuiz(), navigation.navigate('Home'))}>
                <ButtonText>Try again</ButtonText>
            </RemakeButton>
        </Container>
    
    )
}

export default Results;
