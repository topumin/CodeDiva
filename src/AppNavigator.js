import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import CompleteScreen from './screens/CompleteScreen';
import RequestOTPScreen from './screens/RequestOTPScreen';
import ConfirmOTPScreen from './screens/ConfirmOTPScreen';
import PincodeScreen from './screens/PincodeScreen';
import TouchIDScreen from './screens/TouchIDScreen';
import CancelTouchIDScreen from './screens/CancelTouchIDScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Complete" component={CompleteScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RequestOTP" component={RequestOTPScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmOTP" component={ConfirmOTPScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Pincode" component={PincodeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TouchID" component={TouchIDScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CancelTouchID" component={CancelTouchIDScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default RootStack;