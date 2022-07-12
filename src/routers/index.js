import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Questions, Result } from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}}  name="Questions" component={Questions} />
        <Stack.Screen options={{headerShown:false}}  name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
