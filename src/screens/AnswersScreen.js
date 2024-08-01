import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';

const questions = [
  { id: 'q1', text: 'Câu hỏi 1:', options: ['Đáp án A', 'Đáp án B', 'Đáp án C'], required: false },
  { id: 'q2', text: 'Câu hỏi 2:', options: ['Đáp án A', 'Đáp án B', 'Đáp án C'], required: true },
  { id: 'q3', text: 'Câu hỏi 3:', options: [], required: false },
];

const AnswersScreen = ({ navigation, route }) => {
  const { id = 'defaultId' } = route.params || {};
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

  const handleOptionPress = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    // Validate required questions
    const missingRequiredAnswers = questions.filter(
      question => question.required && !answers[question.id]
    );

    if (missingRequiredAnswers.length > 0) {
      Alert.alert("Error", "Please answer all required questions.");
      return;
    }

    // Proceed to success screen if validation passes
    navigation.navigate('SuccessScreen');
  };

  const renderQuestion = (question) => {
    return (
      <View key={question.id} style={styles.questionContainer}>
        <Text style={styles.question}>
          {question.text} {question.required && <Text style={styles.required}>★</Text>}
        </Text>
        {question.options.length > 0 ? (
          question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleOptionPress(question.id, option)}
            >
              <View
                style={[
                  styles.circle,
                  answers[question.id] === option && styles.selectedCircle,
                ]}
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Viết câu trả lời của bạn."
            placeholderTextColor="#888"
            value={answers[question.id]}
            onChangeText={(text) => setAnswers({ ...answers, [question.id]: text })}
          />
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gửi biểu mẫu {id}</Text>
        <Text style={styles.requiredNote}>★ Biểu thị câu hỏi bắt buộc.</Text>
      </View>
      {questions.map(renderQuestion)}
      <Button title="Gửi" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f4f4',
  },
  header: {
    top:20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requiredNote: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionContainer: {
    top:10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  required: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  selectedCircle: {
    backgroundColor: '#000',
  },
});

export default AnswersScreen;
