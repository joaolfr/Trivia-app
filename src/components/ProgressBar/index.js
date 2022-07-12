import React from 'react'
import { Animated } from 'react-native'
import {Container, ProgressContainer, CountingText} from './styles'

const ProgressBar = ({currentQuestion, length, progress}) => {

    const progressAnim = progress.interpolate({
        inputRange: [0, length],
        outputRange: ['0%', '100%']
    })

    return(
        <Container >

        <ProgressContainer >
            <Animated.View style={[{height:29, borderRadius:15, backgroundColor:'#57B890'},{width: progressAnim}]}>
            </Animated.View>
        </ProgressContainer>
            <CountingText>{currentQuestion + 1} of {length}</CountingText>
        </Container>
    )
}

export default ProgressBar;