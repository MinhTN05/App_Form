import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
//styles
import styles from "../styles/styles";
const FlatListForm = ({ item }) => {
    return (
        <FlatList
            data={item}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
                const renderQuestion = (question) => {
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
                };
            
                return renderQuestion(item);
            }}
        />
    )
}
export default FlatListForm;