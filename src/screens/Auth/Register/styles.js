import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50, // Giảm khoảng cách phía dưới
  },
  textlogin: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20, // Khoảng cách giữa các trường nhập liệu
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15, // Khoảng cách giữa nhãn và trường nhập liệu
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#F8ADAD', // Màu khung viền
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: '#F8ADAD', // Màu nền
    color: '#fff', // Màu chữ
  },
  loginButton: {
    height: 50,
    backgroundColor: '#F8ADAD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 62,
    marginBottom: 62,
    marginHorizontal: 100,
  },
  loginButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#E4CDCD',
    alignSelf: 'center',
    fontSize: 15
  },
  registerLink: {
    color: '#FB3535',
    textDecorationLine: 'underline',
  },
});

export default styles;
