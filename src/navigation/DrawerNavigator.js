import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screen
import Form from '../screens/Form';
//components
import CustomDrawerContent from '../components/CustomDrawerContent';
import BottomTabNavigator from './BottomTabNavigator';
import Message from '../screens/MessageScreen';
import AnswersScreen from '../screens/AnswersScreen';
import HomeAnswer from '../screens/HomeAnswer';
import Answer from '../screens/Answer';

const screenOptions = (title, iconName) => ({
    drawerLabel: title,
    title: title,
    drawerIcon: ({ color, size }) => (
        <MaterialIcons name={iconName} color={color} size={size} />
    ),
    drawerLabelStyle: { fontWeight: 'bold' },
    drawerItemStyle: { marginVertical: 5 },
    drawerInactiveTintColor: '#000',
    drawerActiveBackgroundColor: '#FCF3F3',
    headerTitleAlign: 'center',  // Đưa tiêu đề vào giữa
    drawerInactiveBackgroundColor: '#fff',
    headerShown: true,
});

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const user = {
        id: "1",
        name: "User",
        phone: "0987654321",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8GODfBsuHylhyd6SN7ehxW2T3FAh1frqzg&s',
        address: "AAA",
        email: "admin@gmail.com",
        passWord: "123456",
    }

    return (
        <Drawer.Navigator drawerContent={(props) =>
            <CustomDrawerContent {...props} user={user} />} screenOptions={{ headerStyle: { backgroundColor: '#DBA8A8' } }} >
            <Drawer.Screen
                name='BottomTabNavigator'
                component={BottomTabNavigator}
                options={screenOptions('Form', 'home')}
            />
             <Drawer.Screen
                name='Answer'
                component={HomeAnswer}
                options={screenOptions('Answer', 'question-answer')}
            />
             <Drawer.Screen
                name='Message'
                component={Message}
                options={screenOptions('Message', 'message')}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
