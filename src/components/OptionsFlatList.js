import React, { useState, useEffect, useMemo } from "react";
import { Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';
//styles
import styles from '../styles/styles';
// components
import MultipleChoice from "../components/MultipleChoice";
import Paragraph from "../components/Paragraph";
import ShortAnswer from "../components/ShortAnswer";
const OptionsFlatList = ({ item}) => {
    // console.log('item',item);
    return (
        <View>
            {item.map((question, index) => {
                switch (question.type) {
                    case 'multipleChoice':
                        return <MultipleChoice key={index} item={question} index={index} />;
                    case 'paragraph':
                        return <Paragraph key={index} item={question} index={index} />;
                    case 'shortAnswer':
                        return <ShortAnswer key={index} item={question} index={index} />;
                    default:
                        return <Text key={index}>Unknown type</Text>;
                }
            })}
        </View>
    )

};
export default OptionsFlatList;