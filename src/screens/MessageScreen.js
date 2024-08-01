import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const messages = [
  { id: '1', name: 'Nguyễn Văn A', message: 'Gửi biểu mẫu 1', time: '20:30' },
  { id: '2', name: 'Nguyễn Văn B', message: 'Gửi biểu mẫu 2', time: '12:30' },
];
const Message = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.messageContainer}
            onPress={() => navigation.navigate('AnswersScreen', { id: item.id })}
          >
            <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ chiều cao màn hình
    backgroundColor: 'white', // Màu nền trắng
  },
  messageContainer: {
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    padding: 10, // Đệm xung quanh container
    borderBottomWidth: 1, // Đường viền dưới
    borderBottomColor: '#ccc', // Màu của đường viền dưới
    backgroundColor: '#f0f4ff', // Màu nền nhạt
    marginVertical: 5, // Khoảng cách trên và dưới giữa các container
    borderRadius: 10, // Bo tròn các góc của container
  },
  avatar: {
    width: 50, // Chiều rộng của ảnh đại diện
    height: 50, // Chiều cao của ảnh đại diện
    borderRadius: 25, // Bo tròn ảnh đại diện
    marginRight: 10, // Khoảng cách bên phải của ảnh đại diện
  },
  textContainer: {
    flex: 1, // Chiếm hết không gian còn lại
  },
  name: {
    fontSize: 16, // Kích thước chữ của tên
    fontWeight: 'bold', // Chữ đậm
  },
  message: {
    fontSize: 14, // Kích thước chữ của tin nhắn
    color: '#666', // Màu của tin nhắn
  },
  time: {
    fontSize: 14, // Kích thước chữ của thời gian
    color: '#666', // Màu của thời gian
  },
});

export default Message;
