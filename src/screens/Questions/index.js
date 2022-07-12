import React from "react";
import useTrivia from './hooks';
import { ProgressBar } from "../../components";

import {
    OptionButton, 
    OptionText, 
    ButtonsWrapper, 
    QuestionText, 
    QuestionWrapper, 
    CategoryText, 
    Container
} from './styles'

const Questions = () => {

    const {
        questions,
        progress,
        currentQuestion,
        validateAnswer
    } = useTrivia();


    const renderQuestion = () => {
 
        return(
            <QuestionWrapper >
               
                <QuestionText >
                    {questions[currentQuestion]?.question}
                </QuestionText>
                
            </QuestionWrapper>
            )
    };

    const renderOptions = () => {
        return(
            <ButtonsWrapper>
                <OptionButton  onPress={() => validateAnswer("True")} >
                    <OptionText>True</OptionText>
                </OptionButton>
                <OptionButton onPress={() => validateAnswer("False")} >
                    <OptionText>False</OptionText>
                </OptionButton>
            </ButtonsWrapper>
        )
    };



    return(
        
        <Container >
            {/* Header with category */}
            <CategoryText >
                {questions[currentQuestion]?.category}
            </CategoryText>
            {/* progress bar */}
            <ProgressBar currentQuestion={currentQuestion} length={questions.length} progress={progress}/>
            {/* questions */}
            {renderQuestion()}
            {/* options */}
            {renderOptions()}
      
        </Container>

    )
}


export default Questions;