import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import styles from './src/styles/styles';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isLoggedIn ? (
          <StackNavigator />
        ) : (
          <AuthNavigator setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />
        )}
      </View>
    </NavigationContainer>
  );
}
