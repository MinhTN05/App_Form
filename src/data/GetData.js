import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Modal, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
const GetData = () => {
    return [
        {
            id: 1,
            templateTitle: "Biểu mẫu 1",
            numberQuestions: 24,
            typeQuestions: [
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'shortAnswer', questionTitle: 'What is your name?' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
            ]
        },
        {
            id: 2,
            templateTitle: "Biểu mẫu 2",
            numberQuestions: 15,
            typeQuestions: [
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'shortAnswer', questionTitle: 'What is your name?' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
            ],
        },
        {
            id: 3,
            templateTitle: "Biểu mẫu 3",
            numberQuestions: 25,
            typeQuestions: [
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'shortAnswer', questionTitle: 'What is your name?' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'paragraph', questionTitle: 'Describe your ideal vacation.' },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
                { type: 'multipleChoice', questionTitle: 'What is your favorite color?', options: ['Red', 'Blue', 'Green'] },
            ],
        },
    ];
};
export default GetData;