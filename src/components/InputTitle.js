import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//styles 
import styles from '../styles/styles';

const InputTitle = ({ value, onChangeText, placeholder, keyboardType, width, height }) => {
    return (
        <View style={[styles.inputContainer, { width: width, height: height }]}>
            <TextInput
                style={styles.newsTitle}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}
export default InputTitle;