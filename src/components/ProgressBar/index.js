import React, {useState} from 'react'
import { View, Animated } from 'react-native'


const ProgressBar = ({length, progress}) => {

    
    const progressAnim = progress.interpolate({
        inputRange: [0, length],
        outputRange: ['0%', '100%']
    })

    return(
        <View style={{width:'100%', height: 30, backgroundColor:'white', borderRadius:15, marginVertical:10}}>
        <Animated.View style={[{height:30, borderRadius:15, backgroundColor:'green'},
                        {width: progressAnim}]}>

        </Animated.View>
    </View>
    )
}

export default ProgressBar;