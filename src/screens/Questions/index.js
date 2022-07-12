import React, { useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useTrivia from './hooks';
import { ProgressBar } from "../../components";
import {ResultModal} from './components';

const Questions = () => {

    const {
        score,
        showScoreModal,
        restartQuiz,
        questions,
        correctAnswers,
        progress,
        currentQuestion,
        handleNext,
        validateAnswer,
        showNextButton
    } = useTrivia();


    const renderQuestion = () => {
 
        return(
            <View >
               
                <Text style={{color:'white'}} >
                    {questions[currentQuestion]?.question}
                </Text>
                
            </View>
            )
    };

    const renderOptions = () => {
        return(
            <View>
                <TouchableOpacity style={styles.optionBtn} onPress={() => validateAnswer("True")}>
                    <Text>
                        True
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn} onPress={() => validateAnswer("False")}>
                    <Text>
                        False
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };

    const renderNextButton = () => {
        
        if(showNextButton){
            return(
                <TouchableOpacity 
                    onPress={handleNext}
                    style={{color:'red', backgroundColor:'green', width:'100%'}}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    return(
        
        <View style={styles.container}>
            {/* Header with category */}
            <Text>
                {questions[currentQuestion]?.category}
            </Text>
            {/* progress bar */}
            <ProgressBar length={questions.length} progress={progress}/>
            {/* questions */}
            {renderQuestion()}
            {/* options */}
            {renderOptions()}
            {/* next button */}
            {renderNextButton()}
            {/* score modal */}
           <ResultModal 
                visible={showScoreModal} 
                score={score}  
                questions={questions} 
                correctAnswers={correctAnswers} 
                restartQuiz={restartQuiz}
            />

        </View>

    )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        position: 'relative',
        padding: 10 ,
        backgroundColor:'#393e6f'

    },
    optionBtn:{
        
        height:50,
        margin: 15,
        borderRadius: 10,
        alignItems:'center',
        backgroundColor:'#f2f2f2',
        flexDirection:'row',
        justifyContent:'center'
    }

});

export default Questions;