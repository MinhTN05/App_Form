import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
//styles
import styles from "../styles/styles";
//data
import GetData from "../data/GetData";
//conponents
import ButtonPlus from "../components/ButtonPlus";
const Form = () => {
    const navigation = useNavigation();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const data = GetData();
        setQuestions(data);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewForm}>
                <Text style={styles.newsTitle}>List Form: </Text>
                <FlatList
                    data={questions}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('FormAll', { item })}>
                                <View style={styles.viewListForm}>
                                    <Text style={styles.newsTitle}>{item.templateTitle}</Text>
                                    <Text>Số lượng câu hỏi: {item.numberQuestions}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.btnView}>
                <View style={{ marginLeft: 'auto' }}>
                    <ButtonPlus nameIcon={'file'} onPress={() => navigation.navigate('FormAll',{data: {}})} />
                    <Text style={{fontWeight: 'bold'}}>Add Form</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
export default Form;