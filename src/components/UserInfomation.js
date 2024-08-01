// components/LogoutButton.js
import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//styles
import styles from '../styles/styles';
//components
import ImageComponents from './ImageComponents';

const UserInfomation = ({ user }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.row]}>
            <View>
                <ImageComponents width={60} height={60} borderRadius={30} image={user.image} />
            </View>
            <View style={styles.infomation}>
                <Text style={styles.newsTitle}>{user.name}</Text>
            </View>
        </View>
    );
};
export default UserInfomation;