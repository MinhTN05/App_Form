import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, Modal, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

//styles
import styles from "../styles/styles";
//components
import InputTitle from "../components/InputTitle";
import ButtonPlus from "../components/ButtonPlus";
import OptionsFlatList from "../components/OptionsFlatList";

const FormAll = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params ?? {};
    const [templateTitle, setTemplateTitle] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [isEmailModal, setIsEmailModal] = useState(true); // true for email, false for link
    const [email, setEmail] = useState('');
    const [link] = useState('www.3.com');

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleSendEmail = () => {
        if (!email) {
            Alert.alert("Error", "Please enter an email address before sending.");
            return;
        }
        if (!email.includes('@')) {
            Alert.alert("Error", "Please enter a valid email address.");
            return;
        }
        // Add your email sending logic here
        toggleModal();
    };

    const handleNavigateToAnswersScreen = () => {
        toggleModal();
        navigation.navigate('AnswersScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            {item ? (
                <View style={styles.viewForm}>
                    <InputTitle
                        placeholder={"Template without title:"}
                        width={'100%'}
                        height={50}
                        value={item?.templateTitle}
                        onChangeText={(text) => setTemplateTitle(text)}
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <OptionsFlatList item={item?.typeQuestions} />
                    </ScrollView>
                </View>
            ) : <Text style={styles.notication}>No recent forms...</Text>}
            <View style={styles.btnView}>
                <View style={{ marginRight: 'auto' }}>
                    <ButtonPlus nameIcon={'send'} onPress={toggleModal} />
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <ButtonPlus nameIcon={'plus-circle'} onPress={() => navigation.navigate('AddForm', { item })} />
                </View>
            </View>

            {/* General Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={localStyles.centeredView}>
                    <View style={localStyles.modalView}>
                        <Text style={localStyles.modalTitle}>Sent through</Text>
                        <View style={localStyles.iconContainer}>
                            <TouchableOpacity onPress={() => setIsEmailModal(true)}>
                                <Text style={[localStyles.iconText, isEmailModal && localStyles.activeIcon]}>✉️</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsEmailModal(false)}>
                                <Text style={[localStyles.iconText, !isEmailModal && localStyles.activeIcon]}>🔗</Text>
                            </TouchableOpacity>
                        </View>
                        {isEmailModal ? (
                            <>
                                <Text>Email:</Text>
                                <TextInput
                                    style={localStyles.input}
                                    placeholder="Nhập địa chỉ email"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <View style={localStyles.buttonContainer}>
                                    <TouchableOpacity
                                        style={localStyles.cancelButton}
                                        onPress={toggleModal}
                                    >
                                        <Text style={localStyles.cancelText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={localStyles.sendButton}
                                        onPress={handleSendEmail}
                                    >
                                        <Text style={localStyles.sendText}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                            <>
                                <Text>Link</Text>
                                <TouchableOpacity onPress={handleNavigateToAnswersScreen}>
                                    <Text style={localStyles.linkText}>{link}</Text>
                                </TouchableOpacity>
                                <View style={localStyles.buttonContainer}>
                                    <TouchableOpacity
                                        style={localStyles.cancelButton}
                                        onPress={toggleModal}
                                    >
                                        <Text style={localStyles.cancelText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={localStyles.copyButton}
                                        onPress={toggleModal}
                                    >
                                        <Text style={localStyles.copyText}>Copy</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const localStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: 300,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    iconText: {
        marginHorizontal: 10,
        fontSize: 18,
        color: 'black',
    },
    activeIcon: {
        textDecorationLine: 'underline',
        color: '#00CFFF',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
        color: 'gray',
    },
    linkText: {
        marginVertical: 10,
        fontSize: 16,
        color: '#00CFFF',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 10,
        width: '45%',
        alignItems: 'center',
    },
    sendButton: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 10,
        width: '45%',
        alignItems: 'center',
    },
    copyButton: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 10,
        width: '45%',
        alignItems: 'center',
    },
    cancelText: {
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sendText: {
        color: '#00CFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    copyText: {
        color: '#00CFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default FormAll;
