import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

// Screen
import DrawerNavigator from './DrawerNavigator';
import AddForm from '../screens/AddForm';
import AnswersScreen from '../screens/AnswersScreen';
import SuccessScreen from '../screens/SuccessScreen';
import HomeAnswer from '../screens/HomeAnswer';
import Answer from '../screens/Answer';
import Answer2 from '../screens/Answer2';
import Summary from '../screens/Summary';

const Stack = createStackNavigator();

const IconBack = (navigation, title) => ({
  headerShown: true,
  title: title,
  headerTitleAlign: 'center',
  headerLeft: () => (
    <Feather
      name="arrow-left"
      size={30}
      onPress={() => navigation.goBack()}
    />
  ),
});

const IconHeaderRight = (nameIcon, onPress) => ({
  headerShown: true,
  headerRight: () => (
    <Feather
      name={nameIcon}
      size={30}
      style={{ marginRight: 15 }}
      onPress={onPress}
    />
  ),
});

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='DrawerNavigator' screenOptions={{ headerStyle: { backgroundColor: '#DBA8A8' }, headerShown: false }}>
      <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
      <Stack.Screen name='AddForm' component={AddForm}
        options={({ navigation }) => IconBack(navigation, "Add Form")} />
      <Stack.Screen name="AnswersScreen" component={AnswersScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="Answer" component={Answer} />
      <Stack.Screen name="HomeAnswer" component={HomeAnswer} />
      <Stack.Screen name="Answer2" component={Answer2} />
      <Stack.Screen name="Summary" component={Summary} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
