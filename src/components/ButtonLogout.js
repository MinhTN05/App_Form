// components/LogoutButton.js
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//styles
import styles from '../styles/styles';

const ButtonLogout = () => {
  const navigation = useNavigation();
  return ( 
      <TouchableOpacity>
        <Text style={styles.newsTitle}>Đăng xuất</Text>
      </TouchableOpacity>
  );
};
export default ButtonLogout;