import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
// Screens
import FormAll from '../screens/FormAll';
import Form from '../screens/Form';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#DBA8A8' }, // Thay đổi màu nền
                tabBarLabelStyle: { fontSize: 14}, // Thay đổi màu chữ
                tabBarActiveTintColor: '#ffffff', // Màu khi được chọn
                tabBarInactiveTintColor: '#000000', // Màu khi không được chọn
            }}>
            <Tab.Screen name="Form" component={Form} options={{
                tabBarLabel: "Form",
                tabBarIcon: () => {
                    return (
                        <Icon name="file-text" size={35} color="#000000" />
                    );
                }
            }} />
            <Tab.Screen name="FormAll" component={FormAll} options={{
                tabBarLabel: "FormAll",
                tabBarIcon: () => {
                    return (
                        <Icon name="file-plus" size={35} color="#000000" />
                    );
                }
            }} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;