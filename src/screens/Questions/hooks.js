import { useEffect, useState } from "react";
import {getQuestions} from '../../api/Trivia';
import {useTriviaStore} from '../../stores';
import {Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();
    // data and load data
    const {loadQuestions} = getQuestions();
    const {questions} = useTriviaStore();
    // states
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState([])
    // progress bar state
    const [progress, setProgress] = useState(new Animated.Value(0));

    //load the questions in the first render
    useEffect(() => {
        loadQuestions();
    }, [])

    //functions
    const validateAnswer = (selectedOption) => {

        let correct_option = questions[currentQuestion]['correct_answer'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);

        if(selectedOption === correct_option ){
            setScore(score + 1);
            setCorrectAnswers([...correctAnswers, currentQuestion]);

        }
        setShowNextButton(true);
    
    }

    const handleNext = () => {
        if(currentQuestion === questions?.length - 1){
            setShowScoreModal(true);

        }else{
            setCurrentQuestion(currentQuestion + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
        }

        Animated.timing(progress, {
            toValue: currentQuestion + 1,
            duration:1000,
            useNativeDriver:false
        }).start();

    }


    const restartQuiz = () => {

        //back to home screen
        navigation.navigate('Home');

        setCurrentQuestion(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        setShowScoreModal(false);

        Animated.timing(progress, {
            toValue: 0,
            duration:1000,
            useNativeDriver:false
        }).start();

    }


    return {
        loadQuestions,
        currentQuestion,
        setCurrentQuestion,
        currentOptionSelected,
        setCurrentOptionSelected,
        correctOption,
        setCorrectOption,
        isOptionDisabled,
        setIsOptionDisabled,
        score,
        setScore,
        showNextButton,
        setShowNextButton,
        showScoreModal,
        setShowScoreModal,
        restartQuiz,
        questions,
        correctAnswers,
        progress,
        validateAnswer,
        handleNext

    }
}
