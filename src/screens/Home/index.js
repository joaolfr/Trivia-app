import React from "react";
import { Text, View , StyleSheet} from "react-native";
import { Button } from "../../components";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Welcome to Trivia Challenge!
            </Text>
            <Text>
               You will be presented with 10 True or False questions.
            </Text>
            <Text>
               Can you score 100%?
            </Text>
            <Button title={'Bora porra'} onPress={() => navigation.navigate('Questions')}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#393e6f',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    }
});