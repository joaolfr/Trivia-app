import React from "react";
import { Text} from "react-native";
import { Container, NormalText, StartButton, TextButton } from "./styles";

const Home = ({navigation}) => {
    return(
        <Container >
            <NormalText>
                Welcome to Trivia Challenge!
            </NormalText>
            <NormalText>
               You will be presented with 10 True or False questions.
            </NormalText>
            <NormalText>
               Can you score 100%?
            </NormalText>
            <StartButton onPress={() => navigation.navigate('Questions')}>
                <TextButton>Start Quiz</TextButton>
            </StartButton>
        </Container>
    )
}

export default Home;
