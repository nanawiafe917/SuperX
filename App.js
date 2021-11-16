import React from 'react';
import LogInPage from './SCREENS/LogInPage';
import SignUpPage from './SCREENS/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './SCREENS/WelcomePage';
import HomePage from './SCREENS/HomePage';
import MensPage from './SCREENS/MensPage';
import WomensPage from './SCREENS/WomensPage';
import Cart from './SCREENS/Cart';

export default function App(){
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="WelcomePage" component={WelcomePage} options = {{headerShown:false}}/>
       <Stack.Screen name="LogInPage" component={LogInPage} options = {{headerShown:false}}/>
       <Stack.Screen name="SignUpPage" component={SignUpPage} options = {{headerShown:false}}/>
       <Stack.Screen name="HomePage" component={HomePage} options = {{headerShown:false}}/>
       <Stack.Screen name="MensPage" component={MensPage} options = {{headerShown:false}}/>
       <Stack.Screen name="WomensPage" component={WomensPage} options = {{headerShown:false}}/>
       <Stack.Screen name="Cart" component={Cart} options = {{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
      

  );

}