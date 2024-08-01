import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal, StyleSheet, Image, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
//styles
import styles from '../styles/styles';

const PopupImage = ({ visible, onClose, onImageSelected }) => {
  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'You need to allow permission to access the media library.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
      onClose();
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={popupStyles.centeredView}>
        <View style={popupStyles.modalView}>
          <Text style={popupStyles.modalText}>Insert Image:</Text>
          <TouchableOpacity
            style={popupStyles.button}
            onPress={selectImage}
          >
            <Text style={popupStyles.textStyle}>Add image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const MenuModal = ({ visible, onClose, onDelete, onChange, menuPosition }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={menuStyles.overlay} onPress={onClose}>
        <View style={[menuStyles.menu, menuPosition]}>
          <TouchableOpacity style={menuStyles.menuItem} onPress={onChange}>
            <Text style={menuStyles.menuItemText}>Change</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menuStyles.menuItem} onPress={onDelete}>
            <Text style={menuStyles.menuItemText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const ShortAnswer = ({ item, index }) => {
  const [requiredQuestion, setRequiredQuestion] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({});

  const handleChecked = (value) => {
    setRequiredQuestion(requiredQuestion === value ? null : value);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleImageSelected = (uri) => {
    setImageUri(uri);
  };

  const toggleMenu = (event) => {
    setMenuPosition({ top: event.nativeEvent.pageY, left: event.nativeEvent.pageX });
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDeleteImage = () => {
    setImageUri(null);
    setIsMenuVisible(false);
  };

  const handleChangeImage = () => {
    setIsPopupVisible(true);
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.viewListForm}>
      <View style={styles.radioButton}>
        <Text style={styles.newsContent}>Question {index + 1}: </Text>
        <TextInput style={styles.newsContent} placeholder='Question without title...' />
        <View style={{ marginLeft: 'auto' }}>
          <TouchableOpacity onPress={togglePopup}>
            <Feather name="image" size={35} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TouchableOpacity style={styles.menuButton} onPress={(e) => toggleMenu(e)}>
            <Feather name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
      <AutoGrowingTextInput style={styles.newsContent} placeholder={'Write long answers.'} />
      <View style={[styles.radioButton, { marginTop: 10 }]}>
        <Feather name="trash-2" size={30} color="#000000" style={{ marginRight: 5 }} />
        <Feather name="copy" size={30} color="#000000" />
        <View style={[styles.radioButton, { marginLeft: 'auto' }]}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Obligatory</Text>
          <RadioButton.Android
            value="option"
            status={requiredQuestion === 'option' ? 'checked' : 'unchecked'}
            onPress={() => handleChecked('option')}
            color="#007BFF"
          />
        </View>
      </View>

      <PopupImage visible={isPopupVisible} onClose={togglePopup} onImageSelected={handleImageSelected} />
      <MenuModal
        visible={isMenuVisible}
        onClose={toggleMenu}
        onDelete={handleDeleteImage}
        onChange={handleChangeImage}
        menuPosition={menuPosition}
      />
    </View>
  );
};

const popupStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#00CFFF',
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
  menuButton: {
    padding: 10,
  },
});

const menuStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menu: {
    position: 'absolute',
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default ShortAnswer;
