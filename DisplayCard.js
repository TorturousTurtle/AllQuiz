import React, { useEffect, useState } from "react";
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { n5Arr } from "./assets/N5VocabArr";

let wrongAnswers = [];

let round = 1;

const Separator = () => <View style={styles.separator} />;

const generateQuestionArr = (start, end) => {
  let arr = [];
  let i = 0;
  if (start === 0 && end === n5Arr.length) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(n5Arr[element]);
    }
  } else if (end - start > 50) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(n5Arr[element]);
    }
  } else {
    while (start < end) {
      arr[i] = n5Arr[start];
      start++;
      i++;
    }
  }

  return arr;
};

const populateNextRound = () => {
  let arr = [];
  let i = 0;
  while (i < wrongAnswers.length) {
    arr[i] = wrongAnswers[i];
    i++;
  }
  wrongAnswers = [];
  return arr;
};

const shuffleQuestions = (o) => {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

function DisplayCard({ extraData }) {
  const [questionList, setQuestionList] = useState([]);
  const [qIterator, setQIterator] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffleActive, setShuffleActive] = useState(true);
  const [questionFirst, setQuestionFirst] = useState(true);
  const navigation = useNavigation();

  const handleFlip = () => {
    setCardFront(!cardFront);
    
  };

  const handleStartDef = () => {
    handleSetQuestions(!questionFirst);
    setQuestionFirst((questionFirst) => !questionFirst);
  };

  const handleSetQuestions = (flag) => {
    if (flag) {
        setQuestion(
          questionList[qIterator][0].length > 0
            ? questionList[qIterator][0]
            : questionList[qIterator][1]
        );
        setAnswer(
          questionList[qIterator][0].length > 0
            ? questionList[qIterator][1] + "\n\n" + questionList[qIterator][2]
            : questionList[qIterator][2]
        );
      } else {
        setQuestion(questionList[qIterator][2]);
        setAnswer(
          questionList[qIterator][0].length > 0
            ? questionList[qIterator][0] + "\n\n" + questionList[qIterator][1]
            : questionList[qIterator][1]
        );
      }
  }

  const handleCorrect = () => {
    let i = qIterator + 1;
    setCardFront(true);
    if (i < questionList.length) {
      setQIterator(i);
      if (questionFirst) {
        setQuestion(
          questionList[i][0].length > 0
            ? questionList[i][0]
            : questionList[i][1]
        );
        setAnswer(
          questionList[i][0].length > 0
            ? questionList[i][1] + "\n\n" + questionList[i][2]
            : questionList[i][2]
        );
      } else {
        setQuestion(questionList[i][2]);
        setAnswer(
          questionList[i][0].length > 0
            ? questionList[i][0] + "\n\n" + questionList[i][1]
            : questionList[i][1]
        );
      }
    } else {
      setModalVisible(true);
    }
  };

  const handleWrong = () => {
    wrongAnswers.push(questionList[qIterator]);
    setCardFront(true);
    let i = qIterator + 1;
    if (i < questionList.length) {
      setQIterator(i);
      if (questionFirst) {
        setQuestion(
          questionList[i][0].length > 0
            ? questionList[i][0]
            : questionList[i][1]
        );
        setAnswer(
          questionList[i][0].length > 0
            ? questionList[i][1] + "\n\n" + questionList[i][2]
            : questionList[i][2]
        );
      } else {
        setQuestion(questionList[i][2]);
        setAnswer(
          questionList[i][0].length > 0
            ? questionList[i][0] + "\n\n" + questionList[i][1]
            : questionList[i][1]
        );
      }
    } else {
      setModalVisible(true);
    }
  };

  const handleShuffle = () => {
    let arr = shuffleQuestions(questionList);
    setQuestionList(arr);
    if (questionFirst) {
      setQuestion(
        arr[qIterator][0].length > 0 ? arr[qIterator][0] : arr[qIterator][1]
      );
      setAnswer(
        arr[qIterator][0].length > 0
          ? arr[qIterator][1] + "\n\n" + arr[qIterator][2]
          : arr[qIterator][2]
      );
    } else {
      setQuestion(arr[qIterator][2]);
      setAnswer(
        arr[qIterator][0].length > 0
          ? arr[qIterator][0] + "\n\n" + arr[qIterator][1]
          : arr[qIterator][1]
      );
    }
  };

  const handleNextRound = () => {
    setQIterator(0);
    let arr = populateNextRound();
    setQuestionList(arr);
    if (questionFirst) {
      setQuestion(arr[0][0].length > 0 ? arr[0][0] : arr[0][1]);
      setAnswer(
        arr[0][0].length > 0 ? arr[0][1] + "\n\n" + arr[0][2] : arr[0][2]
      );
    } else {
      setQuestion(arr[0][2]);
      setAnswer(
        arr[0][0].length > 0 ? arr[0][0] + "\n\n" + arr[0][1] : arr[0][1]
      );
    }
    setShuffleActive(true);
    setModalVisible(false);
    round++;
  };

  const goHome = () => {
    wrongAnswers = [];
    round = 1;
    setQuestionFirst(true);
    setModalVisible(false);
    navigation.popToTop();
  };

  const cancelButton = () => {
    wrongAnswers = [];
    round = 1;
    setQuestionFirst(true);
    setModalVisible(false);
    navigation.popToTop();
  };

  useEffect(() => {
    if (questionList.length === 0) {
      let arr = generateQuestionArr(extraData[0], extraData[1]);
      setQuestionList(arr);
      if (questionFirst) {
        setQuestion(
          arr[qIterator][0].length > 0 ? arr[qIterator][0] : arr[qIterator][1]
        );
        setAnswer(
          arr[qIterator][0].length > 0
            ? arr[qIterator][1] + "\n\n" + arr[qIterator][2]
            : arr[qIterator][2]
        );
      } else {
        setQuestion(arr[qIterator][2]);
        setAnswer(
          arr[qIterator][0].length > 0
            ? arr[qIterator][0] + "\n\n" + arr[qIterator][1]
            : arr[qIterator][1]
        );
      }
    }
    if (qIterator > 0) setShuffleActive(false);
  }, [
    cardFront,
    question,
    answer,
    qIterator,
    questionList,
    shuffleActive,
    questionFirst,
  ]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          backgroundColor: "#2076df",
        }}
      >
        <TouchableHighlight onPress={cancelButton}>
          <Text style={styles.cancelButtonText}>X</Text>
        </TouchableHighlight>
        <View style={styles.iteratorContainer}>
          <Text style={styles.interatorText}>
            {qIterator + 1}/{questionList.length}
          </Text>
        </View>
      </View>
      <TouchableHighlight onPress={handleFlip} style={styles.topContainer}>
        <View>
          <Text style={styles.questionText}>
            {cardFront ? question : answer}
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[styles.buttonDisplay, { backgroundColor: "#dd1c1a" }]}
            onPress={handleWrong}
          >
            <Text style={styles.buttonText}>Wrong</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonDisplay}
            onPress={handleCorrect}
          >
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.shuffleButtonContainer}>
          {shuffleActive && (
            <View>
              <TouchableHighlight
                style={[styles.buttonDisplay, { height: 40, width: 350 }]}
                onPress={handleShuffle}
              >
                <Text style={[styles.buttonText, { fontSize: 35 }]}>
                  Shuffle
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[
                  styles.buttonDisplay,
                  { height: 40, width: 350, marginTop: "3%" },
                ]}
                onPress={handleStartDef}
              >
                <Text style={[styles.buttonText, { fontSize: 25 }]}>
                  Start With Definitions
                </Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalContainer}>
              <View style={styles.scoreContainer}>
              <Text style={styles.modalText}>Round: {round}</Text>
                <Text style={styles.modalText}>Your Score</Text>
                <Text style={styles.scoreText}>
                  Correct: {questionList.length - wrongAnswers.length}
                </Text>
                <Text style={styles.scoreText}>
                  Incorrect: {wrongAnswers.length}
                </Text>
                <View style={styles.listContainer}>
                  <View style={styles.modalButtonContainer}>
                    <Separator />
                    {wrongAnswers.length > 0 && (
                      <TouchableHighlight
                        style={styles.modalButton}
                        onPress={handleNextRound}
                      >
                        <Text style={styles.buttonText}>Next Round</Text>
                      </TouchableHighlight>
                    )}
                    <TouchableHighlight
                      style={[
                        styles.modalButton,
                        { backgroundColor: "#dd1c1a" },
                      ]}
                      onPress={goHome}
                    >
                      <Text style={styles.buttonText}>Quit</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    height: "50%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#2076df",
    borderBottomWidth: 2,
    borderBottomColor: "#ba45aa",
    shadowColor: "rgba(0, 0, 0, 1)",
  },
  bottomContainer: {
    height: "50%",
    justifyContent: "flex-start",
    backgroundColor: "#45ba55",
  },
  iteratorContainer: {
    width: 80,
    marginLeft: 290,
    marginTop: 5,
    backgroundColor: "#2076df",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
  },
  listContainer: {
    justifyContent: "center",
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  listItem: {
    justifyContent: "center",
    backgroundColor: "#2076df",
    marginTop: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7,
  },
  modalButtonContainer: {
    marginTop: 1,
  },
  listTitleText: {
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "Optima",
  },
  listQuestionText: {
    marginTop: 2,
    color: "white",
    fontSize: 20,
    fontFamily: "Optima",
  },
  listAnswerText: {
    marginTop: 2,
    color: "white",
    fontSize: 20,
    fontFamily: "Optima",
  },
  interatorText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
  questionText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    fontFamily: "HiraMinProN-W3"
  },
  modalText: {
    fontSize: 45,
    textDecorationLine: "underline",
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    marginTop: 20,
  },
  scoreText: {
    fontSize: 45,
    color: "black",
    textAlign: "center",
    fontFamily: "Optima",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10%",
  },

  shuffleButtonContainer: {
    marginTop: "10%",
    alignItems: "center",
  },

  buttonDisplay: {
    width: 150,
    height: 65,
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  modalButton: {
    width: 250,
    height: 40,
    marginTop: "10%",
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 3, height: 1 },
  },
  cancelButton: {
    width: 100,
    height: 40,
    marginTop: 40,
    marginLeft: 12,
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
  cancelButtonText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  modalContainer: {
    height: "50%",
    width: "90%",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    marginLeft: "5%",
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  scoreContainer: {
    height: "95%",
    width: "95%",
    backgroundColor: "#45ba55",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default DisplayCard;
