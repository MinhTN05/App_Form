import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

const allQuestions = [
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
];

const filters = [
  { label: 'Tất cả', value: null },
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
];

const types = [
  { label: 'Ngắn', value: 'shortAnswer' },
  { label: 'Dài', value: 'longAnswer' },
];

const Summary = ({ navigation }) => {
  const [answerFilter, setAnswerFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const renderFilterItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        answerFilter === item.value && styles.selectedFilterButton
      ]}
      onPress={() => setAnswerFilter(answerFilter === item.value ? null : item.value)}
    >
      <Text style={styles.filterButtonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderTypeItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        typeFilter === item.value && styles.selectedFilterButton
      ]}
      onPress={() => setTypeFilter(typeFilter === item.value ? null : item.value)}
    >
      <Text style={styles.filterButtonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const filteredQuestions = allQuestions.filter((item) => {
    const filterByAnswer = answerFilter ? item.answer === answerFilter : true;
    const filterByType = typeFilter ? item.type === typeFilter : true;
    return filterByAnswer && filterByType;
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredQuestions.map((item) => (
          <View style={styles.section} key={item.id}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.type === 'multipleChoice' && (
              <>
                {item.options.map(option => (
                  <Text
                    key={option.value}
                    style={[
                      styles.optionText,
                      item.answer === option.value && styles.selectedOption
                    ]}
                  >
                    {option.value}. {option.text}
                  </Text>
                ))}
                <Text style={styles.userAnswerText}>
                  Câu trả lời: {item.options.find(option => option.value === item.answer)?.text || 'Chưa trả lời'}
                </Text>
              </>
            )}
            {(item.type === 'shortAnswer' || item.type === 'longAnswer') && (
              <>
                {item.image && (
                  <Image source={{ uri: item.image }} style={styles.questionImage} />
                )}
                <Text style={styles.userAnswerText}>Câu trả lời: {item.answer}</Text>
              </>
            )}
          </View>
        ))}

        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Lọc câu trả lời</Text>
          <FlatList
            data={filters}
            renderItem={renderFilterItem}
            keyExtractor={item => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterList}
          />

          <Text style={styles.filterTitle}>Lọc loại câu hỏi</Text>
          <FlatList
            data={types}
            renderItem={renderTypeItem}
            keyExtractor={item => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterList}
          />
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('DrawerNavigator')}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EFFF',
  },
  scrollContainer: {
    padding: width * 0.05,
    paddingBottom: height * 0.1,
  },
  section: {
    padding: width * 0.05,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: 'black',
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
  userAnswerText: {
    fontSize: width * 0.045,
    marginTop: height * 0.01,
    color: 'black',
  },
  filtersContainer: {
    padding: width * 0.05,
    backgroundColor: '#F0EFFF',
  },
  filterList: {
    marginBottom: height * 0.02,
  },
  filterTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  filterButton: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: width * 0.01,
  },
  selectedFilterButton: {
    backgroundColor: '#673BB7',
  },
  filterButtonText: {
    color: '#FFF',
    fontSize: width * 0.045,
  },
  backButton: {
    marginTop: height * 0.03,
    marginHorizontal: width * 0.25,
    backgroundColor: '#673BB7',
    borderRadius: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: width * 0.07,
    paddingVertical: height * 0.01,
  },
  optionText: {
    fontSize: width * 0.045,
    color: 'black',
    marginVertical: height * 0.01,
  },
  selectedOption: {
    fontWeight: 'bold',
    color: '#673BB7',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 22,
    paddingVertical: 10,
  },
});

export default Summary;
