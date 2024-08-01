import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//styles
import styles from '../styles/styles';
//componets
import UserInfomation from './UserInfomation';
import ButtonLogout from './ButtonLogout';

const CustomDrawerContent = (props) => {    
    const { user } = props;  // Lấy thông tin người dùng từ props
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
            <UserInfomation user={user} />
            <Text style={styles.separator} />
            <View style={styles.content1}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.logout}>
                <ButtonLogout />
            </View>
        </DrawerContentScrollView>
    );
};
export default CustomDrawerContent;