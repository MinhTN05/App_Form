import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Gửi biểu mẫu 1</Text>
        <Text style={styles.message}>Câu trả lời của bạn đã được ghi lại.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ chiều cao màn hình
    justifyContent: 'flex-start', // Đặt các phần tử con lên trên cùng
    alignItems: 'flex-start', // Căn lề trái theo chiều ngang
    padding: 20,
    backgroundColor: '#f8f4f4', // Màu nền nhạt
  },
  messageContainer: {
    backgroundColor: '#fff', // Màu nền trắng
    padding: 20, // Đệm xung quanh
    borderRadius: 10, // Bo tròn các góc
    width: width - 40, // Chiều rộng khung bằng chiều rộng màn hình trừ 40 đơn vị để có khoảng cách với lề
    marginBottom: 20, // Khoảng cách dưới cùng
    marginTop: 40, // Khoảng cách trên cùng để đặt tin nhắn lên trên
  },
  title: {
    fontSize: 28, // Kích thước chữ lớn
    fontWeight: 'bold', // Chữ đậm
    marginBottom: 10, // Khoảng cách dưới cùng của tiêu đề
  },
  message: {
    fontSize: 18, // Kích thước chữ lớn hơn
    textAlign: 'left', // Căn trái chữ
  },
  button: {
    backgroundColor: '#6C63FF', // Màu nền tím
    paddingVertical: 10, // Đệm dọc
    paddingHorizontal: 20, // Đệm ngang
    borderRadius: 20, // Bo tròn các góc nút
    alignSelf: 'center', // Căn giữa nút bấm
  },
  buttonText: {
    color: '#fff', // Màu chữ trắng
    fontSize: 26, // Kích thước chữ lớn
    fontWeight: 'bold', // Chữ đậm
  },
});

export default SuccessScreen;
