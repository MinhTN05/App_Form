import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/Login/Login';
import RegisterScreen from '../screens/Auth/Register/Register';

const AuthStack = createStackNavigator();

const AuthNavigator = ({ setIsLoggedIn, setUserType }) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="Login"
        options={{ headerShown: false }}
      >
        {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />}
      </AuthStack.Screen>
      <AuthStack.Screen 
        name="Register"
        options={{ headerShown: false }}
      >
        {props => <RegisterScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
