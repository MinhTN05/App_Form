import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    message: 'Gửi biểu mẫu 1',
    time: '10:30',
    avatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/avartar-anime-43.jpg',
  },
  {
    id: '2',
    name: 'Nguyễn Văn B',
    message: 'Gửi biểu mẫu 1',
    time: '12:30',
    avatar: 'https://i.pinimg.com/236x/48/7e/7a/487e7ae852ddc21342b56c28d9159b36.jpg',
  },
];

const Item = ({ name, message, time, avatar, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
    <Text style={styles.time}>{time}</Text>
  </TouchableOpacity>
);

const HomeAnswer = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item 
      name={item.name} 
      message={item.message} 
      time={item.time} 
      avatar={item.avatar} 
      onPress={() => navigation.navigate('Answer2', { name: item.name })} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: height * 0.015,
    marginVertical: height * 0.005,
    marginHorizontal: width * 0.03,
    borderRadius: 20,
  },
  avatar: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.09,
  },
  textContainer: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  name: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  message: {
    fontSize: width * 0.06,
    color: 'black',
    fontWeight: 'bold',
  },
  time: {
    fontSize: width * 0.06,
    color: '#666',
    fontWeight: 'bold',
  },
});

export default HomeAnswer;
