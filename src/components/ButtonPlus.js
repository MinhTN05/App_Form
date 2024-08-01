// components/LogoutButton.js
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
//styles
import styles from '../styles/styles';

const ButtonPlus = ({onPress, nameIcon}) => {
  const navigation = useNavigation();
  return ( 
      <TouchableOpacity onPress={onPress}>
        <Feather name={nameIcon} size={60} color="#000000"/>
      </TouchableOpacity>
  );
};
export default ButtonPlus;