import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const Answer = ({ navigation }) => {
  const [questions, setQuestions] = React.useState([
    {
      id: '5',
      question: 'Câu hỏi 5: AI viết tắt của cụm từ nào?',
      type: 'multipleChoice',
      options: [
        { value: 'A', text: 'Artificial Intelligence' },
        { value: 'B', text: 'Automated Interaction' },
        { value: 'C', text: 'Algorithmic Integration' },
      ],
      answer: 'A', // câu trả lời của người dùng
    },
    {
      id: '6',
      question: 'Câu hỏi 6: Blockchain là gì?',
      type: 'multipleChoice',
      options: [
        { value: 'A', text: 'Một cơ sở dữ liệu phân tán' },
        { value: 'B', text: 'Một loại tiền tệ số' },
        { value: 'C', text: 'Một ngôn ngữ lập trình' },
      ],
      answer: 'A',
    },
    {
      id: '7',
      question: 'Câu hỏi 7: Bạn đã từng sử dụng AI để làm gì?',
      type: 'shortAnswer',
      image: 'https://cdn.tgdd.vn/Files/2018/09/14/1117277/tri-tue-nhan-tao-ai-la-gi-ung-dung-nhu-the-nao-trong-cuoc-song--11.jpg',
      answer: 'Sử dụng AI để viết mã.',
    },
    {
      id: '8',
      question: 'Câu hỏi 8: Hãy mô tả tầm quan trọng của blockchain trong ngành tài chính.',
      type: 'longAnswer',
      image: 'https://geneat.vn/wp-content/uploads/2023/07/ung-dung-blockchain-trong-linh-vuc-tai-chinh-4.jpg',
      answer: 'Blockchain mang lại sự minh bạch và bảo mật cao trong các giao dịch tài chính.',
    },
  ]);

  const goToAnswer2 = () => {
    navigation.navigate('Answer2', { answerData: questions });
  };

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
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.questionImage} />
      )}
      <Text style={styles.userAnswerText}>Câu trả lời: {item.answer}</Text>
    </View>
  );

  const renderLongAnswer = (item) => (
    <View style={styles.section} key={item.id}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.questionImage} />
      )}
      <Text style={styles.userAnswerText}>Câu trả lời: {item.answer}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.headerText}>2 câu trả lời</Text>
        <TouchableOpacity onPress={goToAnswer2}>
          <Text style={styles.paginationText}>{'<'} 2 / 2 {'>'}</Text>
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

    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.backButtonText}>Xem Tổng Kết</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={styles.backButtonText}>Back</Text>
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
  questionImage: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginVertical: height * 0.01,
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
  backButtonText: {
    color: '#FFF',
    fontSize: width * 0.07,
    paddingVertical: height * 0.01,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 22,
    paddingVertical: 10,
  },
});

export default Answer;
