import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const RegisterScreen = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (password === confirmPassword) {
      setIsLoggedIn(true);
      navigation.navigate('AddForm');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../../../assets/images/auth_nen.jpg')} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.textlogin}>REGISTER</Text>
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Please enter Confirm Password."
                placeholderTextColor="#000000"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerText}>
                Do you already have an account? <Text style={styles.registerLink}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
