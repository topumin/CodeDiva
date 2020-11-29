import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CompleteScreen from './screens/CompleteScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Complete" component={CompleteScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default RootStack;