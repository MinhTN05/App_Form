import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = ({ setIsLoggedIn, setUserType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (username === 'user@gmail.com') {
      setUserType('user');
      setIsLoggedIn(true);
    } else {
      alert('Tên đăng nhập không hợp lệ');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../../../assets/images/auth_nen.jpg')} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.textlogin}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email (Mobile number):</Text>
              <TextInput
                style={styles.input}
                placeholder="Please enter email or phone number."
                placeholderTextColor="#000000"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Please enter password."
                placeholderTextColor="#000000"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>
                Don’t have an account? <Text style={styles.registerLink}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
