import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF3F3', // Nền xám sáng cho toàn bộ màn hình
    },
    separator: {
        width: '100%',  // Or you can use a fixed width, like 50 or 100
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    logout: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginTop: 'auto',
    },
    row: {
        flexDirection: 'row',
    },
    infomation: {
        justifyContent: 'center',
        margin: 10,
    },
    newsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    newsContent: {
        fontSize: 16,
    },
    viewForm: {
        margin: 10,
        padding: 10,
    },
    viewListForm: {
        backgroundColor: '#C9C0C0',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C9C0C0', // Nền trắng cho ô nhập liệu
        borderRadius: 10,
        borderColor: '#DDDDDD', // Màu viền xám nhạt
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        shadowColor: '#000000', // Màu bóng của ô nhập liệu
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    btnView: {
        flexDirection: 'row',
        marginTop: 'auto',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#FCF3F3',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
        width: '100%',
    },
    viewModal: {
        backgroundColor: '#C9C0C0',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        width: 300,
        height: 300,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        width: '50%',
        marginLeft: 'auto',
        marginTop: '22%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    notication: {
        textAlign: 'center',
        margin: 10,
        fontSize: 25,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
      },
});
export default styles;