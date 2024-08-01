import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const questions = [
  {
    id: '1',
    question: 'Câu hỏi 1: HTTP viết tắt của cụm từ nào?',
    type: 'multipleChoice',
    options: [
      { value: 'A', text: 'Giao thức truyền siêu văn bản' },
      { value: 'B', text: 'Giao thức liên kết siêu văn bản' },
      { value: 'C', text: 'Chương trình truyền siêu văn bản' },
    ],
    answer: 'A',
  },
  {
    id: '2',
    question: 'Câu hỏi 2: Chức năng chính của tường lửa (firewall) là gì?',
    type: 'multipleChoice',
    options: [
      { value: 'A', text: 'Giám sát lưu lượng mạng' },
      { value: 'B', text: 'Chặn truy cập trái phép' },
      { value: 'C', text: 'Tăng tốc kết nối internet' },
    ],
    answer: 'B',
  },
  {
    id: '3',
    question: 'Câu hỏi 3: Mô tả cách bạn thường sử dụng Internet hàng ngày.',
    type: 'shortAnswer',
    answer: 'Sử dụng internet hàng ngày để tra cứu thông tin.',
  },
  {
    id: '4',
    question: 'Câu hỏi 4: Hãy viết một đoạn văn ngắn về lợi ích của việc sử dụng công nghệ trong giáo dục.',
    type: 'longAnswer',
    answer: 'Công nghệ trong giáo dục giúp tiết kiệm thời gian và cung cấp tài liệu học tập phong phú.',
  },
];

const Answer2 = ({ navigation }) => {
  const renderMultipleChoice = (item) => {
    const selectedOption = item.options.find(option => option.value === item.answer);

    return (
      <View style={styles.section} key={item.id}>
        <Text style={styles.questionText}>{item.question}</Text>
        <RadioButton.Group value={item.answer}>
          {item.options.map((option) => (
            <View style={styles.radioButton} key={option.value}>
              <RadioButton
                value={option.value}
                uncheckedColor="#673BB7"
                color="#673BB7"
                disabled
              />
              <Text style={styles.answerText}>{option.text}</Text>
            </View>
          ))}
        </RadioButton.Group>
        <Text style={styles.userAnswerText}>Câu trả lời: {selectedOption ? selectedOption.text : 'Chưa trả lời'}</Text>
      </View>
    );
  };

  const renderShortAnswer = (item) => (
    <View style={styles.section} key={item.id}>
      <Text style={styles.questionText}>{item.question}</Text>
      <TextInput
        style={styles.input}
        value={item.answer}
        editable={false}
      />
    </View>
  );

  const renderLongAnswer = (item) => (
    <View style={styles.section} key={item.id}>
      <Text style={styles.questionText}>{item.question}</Text>
      <TextInput
        style={styles.input}
        value={item.answer}
        multiline
        editable={false}
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.headerText}>2 câu trả lời</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Answer')}>
          <Text style={styles.paginationText}>{'<'} 1 / 2 {'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.formTitle}>Gửi biểu mẫu 1</Text>
        <Text style={styles.formSubtitle}>* Biểu thị câu hỏi bắt buộc.</Text>
      </View>

      {questions.map((item) => {
        if (item.type === 'multipleChoice') {
          return renderMultipleChoice(item);
        } else if (item.type === 'shortAnswer') {
          return renderShortAnswer(item);
        } else if (item.type === 'longAnswer') {
          return renderLongAnswer(item);
        }
      })}

      <TouchableOpacity style={styles.summaryButton} onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={styles.summaryButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    backgroundColor: '#F0EFFF',
  },
  section: {
    padding: width * 0.05,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  paginationText: {
    fontSize: width * 0.045,
    alignSelf: 'flex-start',
    marginTop: height * 0.01,
  },
  formTitle: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
  formSubtitle: {
    color: 'red',
    fontSize: width * 0.04,
  },
  questionText: {
    fontSize: width * 0.05,
    marginBottom: height * 0.01,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: width * 0.03,
    fontSize: width * 0.04,
    color: 'black',
    marginTop: height * 0.01,
    backgroundColor: '#FFF',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerText: {
    fontSize: width * 0.05,
    color: 'black',
  },
  userAnswerText: {
    fontSize: width * 0.045,
    marginTop: height * 0.01,
    color: 'black',
  },
  backButton: {
    marginTop: height * 0.03,
    marginHorizontal: width * 0.25,
    backgroundColor: '#673BB7',
    borderRadius: 20,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  summaryButton: {
    marginTop: height * 0.03,
    marginHorizontal: width * 0.25,
    backgroundColor: '#673BB7',
    borderRadius: 20,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  summaryButtonText: {
    color: '#FFF',
    fontSize: width * 0.07,
    paddingVertical: height * 0.01,
  },
});

export default Answer2;