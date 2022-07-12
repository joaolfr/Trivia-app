import React from "react";
import {Modal, ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ResultModal = ({visible, score, questions, correctAnswers, restartQuiz}) => {

    return(
        <Modal 
        animationType="slide" 
        transparent={true}
        visible={visible}
    >
        <View style={styles.container} >

            <View style={styles.resultBox}>
                <Text>Congrats</Text>
                <Text>{score}</Text>
                <Text>/ {questions.length}</Text>
            </View>
            <ScrollView style={styles.questionsList}>
                {questions.map((item, index) => {
                    return(
                        <Text key={index}>
                            {correctAnswers.includes(index) ? '+' : '-'} {item.question}
                        </Text>
                    )
                })}
            </ScrollView>

            {/* retry button */}

            <TouchableOpacity onPress={restartQuiz}>
                <Text>Try again</Text>
            </TouchableOpacity>
        </View>
    </Modal>
    )
}

export default ResultModal;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#f2f2f2',
        padding:20
    },
    resultBox:{
        flex:1,
        width:'90%', 
        backgroundColor:'#f2f2f2', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },
    questionsList:{
        backgroundColor:'green'
    }

});