import React, { useEffect, useState } from "react";
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { n5Arr } from "./assets/N5VocabArr";
import { n4Arr } from "./assets/N4VocabArr";
import { n3Arr } from "./assets/N3VocabArr";
import { n2Arr } from "./assets/N2VocabArr";
import { g1Arr } from "./assets/G1VocabArr";
import { g2Arr } from "./assets/G2VocabArr";
import { g3Arr } from "./assets/G3VocabArr";
import { g4Arr } from "./assets/G4VocabArr";
import { g5Arr } from "./assets/G5VocabArr";
import { g6Arr } from "./assets/G6VocabArr";
import { g7Arr } from "./assets/G7VocabArr";
import { g8Arr } from "./assets/G8VocabArr";
import { g9Arr } from "./assets/G9VocabArr";
import { g10Arr } from "./assets/G10VocabArr";
import { g11Arr } from "./assets/G11VocabArr";
import { g12Arr } from "./assets/G12VocabArr";
import { g13Arr } from "./assets/G13VocabArr";
import { g14Arr } from "./assets/G14VocabArr";
import { g15Arr } from "./assets/G15VocabArr";
import { g16Arr } from "./assets/G16VocabArr";
import { g17Arr } from "./assets/G17VocabArr";
import { g18Arr } from "./assets/G18VocabArr";
import { g19Arr } from "./assets/G19VocabArr";
import { g20Arr } from "./assets/G20VocabArr";
import { g21Arr } from "./assets/G21VocabArr";
import { g22Arr } from "./assets/G22VocabArr";
import { g23Arr } from "./assets/G23VocabArr";
import { presentTenseArr } from "./assets/presentTenseArr";
import { pastTenseArr } from "./assets/pastTenseArr";

let wrongAnswers = [];
let idList = [];

let currArrList = n5Arr;

let round = 1;

const Separator = () => <View style={styles.separator} />;

const generateTenseQuestionArr = () => {
  let arr = [];
  let scrambledArr = shuffleQuestions(currArrList);
  for (let i = 0; i < 50; i++) {
    let cVerb = scrambledArr[i][3];
    if (cVerb.length > 11) {
      cVerb = cVerb.replace("/", "\n");
    }
    let tempArr = [
      scrambledArr[i][0],
      scrambledArr[i][1] + "\n\n" + scrambledArr[i][2],
      scrambledArr[i][2],
      cVerb + "\n\n" + scrambledArr[i][4],
    ];
    scrambledArr[i] = tempArr;
    arr[i] = scrambledArr[i];
    idList[i] = scrambledArr[i][0];
  }
  return arr;
};

const generateGenkiQuestionArr = () => {
  let arr = [];
  for (let i = 0; i < currArrList.length; i++) {
    arr[i] = currArrList[i];
    idList[i] = currArrList[i][0];
  }
  return arr;
};

const generateQuestionArr = (start, end) => {
  let arr = [];
  let i = 0;
  if (start === 0 && end === currArrList.length) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(currArrList[element]);
      idList.push(currArrList[element][0]);
    }
  } else if (end - start > 50) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(currArrList[element]);
      idList.push(currArrList[element][0]);
    }
  } else {
    while (start < end) {
      arr[i] = currArrList[start];
      idList[i] = currArrList[start][0];
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

const DisplayCard = ({
  extraData,
  currArr,
  practiceArr,
  handleResetPracticeArr,
}) => {
  const [questionList, setQuestionList] = useState([]);
  const [qIterator, setQIterator] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffleActive, setShuffleActive] = useState(true);
  const [questionFirst, setQuestionFirst] = useState(true);
  const [scores, setScores] = useState([]);
  const [dailyAttempts, setDailyAttempts] = useState({});
  const [hint, setHint] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [fSize, setFSize] = useState(50);
  const navigation = useNavigation();

  const updateScoreList = (question, pointType) => {
    let x = JSON.parse(JSON.stringify(scores));
    let n = pointType === "correct" ? [1, 0] : [0, 1];
    let obj = {
      correct: n[0],
      wrong: n[1],
      average: 0,
      question: [question[0], question[1], question[2], question[3]],
    };
    x[question[0]] = obj;
    setScores(JSON.parse(JSON.stringify(x)));
  };

  const handleFlip = () => {
    setCardFront(!cardFront);
  };

  const handleStartDef = () => {
    handleSetQuestions(!questionFirst);
    setQuestionFirst((questionFirst) => !questionFirst);
  };

  const handleShowHint = () => {
    setShowHint(!showHint);
  };

  const handleSetQuestions = (flag) => {
    if (flag) {
      setQuestion(
        questionList[qIterator][1].length > 0
          ? questionList[qIterator][1]
          : questionList[qIterator][2]
      );
      setAnswer(
        questionList[qIterator][1].length > 0
          ? questionList[qIterator][2] + "\n\n" + questionList[qIterator][3]
          : questionList[qIterator][3]
      );
      setHint(questionList[qIterator][3]);
    } else {
      setQuestion(questionList[qIterator][3]);
      setAnswer(
        questionList[qIterator][1].length > 0
          ? questionList[qIterator][1] + "\n\n" + questionList[qIterator][2]
          : questionList[qIterator][2]
      );
    }
  };

  const handleCorrect = () => {
    let id = questionList[qIterator][0];
    if (scores.hasOwnProperty(id)) {
      scores[id]["correct"] = scores[id]["correct"] + 1;
    } else {
      updateScoreList(questionList[qIterator], "correct");
    }
    let i = qIterator + 1;
    setCardFront(true);
    if (i < questionList.length) {
      setQIterator(i);
      if (questionFirst) {
        setQuestion(
          questionList[i][1].length > 0
            ? questionList[i][1]
            : questionList[i][2]
        );
        setAnswer(
          questionList[i][2].length > 0
            ? questionList[i][2] + "\n\n" + questionList[i][3]
            : questionList[i][3]
        );
        setHint(questionList[i][3]);
      } else {
        setQuestion(questionList[i][3]);
        setAnswer(
          questionList[i][1].length > 0
            ? questionList[i][1] + "\n\n" + questionList[i][2]
            : questionList[i][2]
        );
      }
    } else {
      setModalVisible(true);
    }
  };

  const handleWrong = () => {
    let id = questionList[qIterator][0];
    if (scores.hasOwnProperty(id)) {
      scores[id]["wrong"] = scores[id]["wrong"] + 1;
    } else {
      updateScoreList(questionList[qIterator], "wrong");
    }
    wrongAnswers.push(questionList[qIterator]);
    setCardFront(true);
    let i = qIterator + 1;
    if (i < questionList.length) {
      setQIterator(i);
      if (questionFirst) {
        setQuestion(
          questionList[i][1].length > 0
            ? questionList[i][1]
            : questionList[i][2]
        );
        setAnswer(
          questionList[i][1].length > 0
            ? questionList[i][2] + "\n\n" + questionList[i][3]
            : questionList[i][3]
        );
        setHint(questionList[i][3]);
      } else {
        setQuestion(questionList[i][3]);
        setAnswer(
          questionList[i][1].length > 0
            ? questionList[i][1] + "\n\n" + questionList[i][2]
            : questionList[i][2]
        );
      }
    } else {
      setModalVisible(true);
    }
    setShowHint(false);
  };

  const handleShuffle = () => {
    let arr = shuffleQuestions(questionList);
    setQuestionList(arr);
    if (questionFirst) {
      setQuestion(
        arr[qIterator][1].length > 0 ? arr[qIterator][1] : arr[qIterator][2]
      );
      setAnswer(
        arr[qIterator][1].length > 0
          ? arr[qIterator][2] + "\n\n" + arr[qIterator][3]
          : arr[qIterator][3]
      );
      setHint(arr[qIterator][3]);
    } else {
      setQuestion(arr[qIterator][3]);
      setAnswer(
        arr[qIterator][1].length > 0
          ? arr[qIterator][1] + "\n\n" + arr[qIterator][2]
          : arr[qIterator][2]
      );
    }
  };

  const handleNextRound = () => {
    setQIterator(0);
    dailyAttempts.totalStudiedToday += questionList.length;
    let arr = populateNextRound();
    setQuestionList(arr);
    if (questionFirst) {
      setQuestion(arr[0][1].length > 0 ? arr[0][1] : arr[0][2]);
      setAnswer(
        arr[0][1].length > 0 ? arr[0][2] + "\n\n" + arr[0][3] : arr[0][3]
      );
      setHint(arr[0][3]);
    } else {
      setQuestion(arr[0][3]);
      setAnswer(
        arr[0][1].length > 0 ? arr[0][1] + "\n\n" + arr[0][2] : arr[0][2]
      );
    }
    setShuffleActive(true);
    setModalVisible(false);
    setHint(false);
    round++;
  };

  const updateScores = async () => {
    for (let i = 0; i < idList.length; i++) {
      let id = idList[i];
      let avg =
        parseFloat(scores[id]["correct"]) /
        (scores[id]["correct"] + scores[id]["wrong"]);
      scores[id]["average"] = avg;
    }
    dailyAttempts.attempts = dailyAttempts.attempts + 1;
    dailyAttempts.totalStudiedToday += questionList.length;
    try {
      const jsonValue = JSON.stringify(scores);
      await AsyncStorage.setItem("@scores", jsonValue);
      const attempts = JSON.stringify(dailyAttempts);
      await AsyncStorage.setItem("@tries", attempts);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const handleSetQuestion = (arr) => {
    if (questionFirst) {
      setQuestion(
        arr[qIterator][1].length > 0 ? arr[qIterator][1] : arr[qIterator][2]
      );
      setAnswer(
        arr[qIterator][1].length > 0
          ? arr[qIterator][2] + "\n\n" + arr[qIterator][3]
          : arr[qIterator][3]
      );
      setHint(arr[qIterator][3]);
    } else {
      setQuestion(arr[qIterator][3]);
      setAnswer(
        arr[qIterator][1].length > 0
          ? arr[qIterator][1] + "\n\n" + arr[qIterator][2]
          : arr[qIterator][2]
      );
    }
  };

  const goHome = () => {
    wrongAnswers = [];
    round = 1;
    updateScores();
    setQuestionFirst(true);
    setShowHint(false);
    setQuestionList([]);
    practiceArr = [];
    handleResetPracticeArr();
    setModalVisible(false);
    navigation.goBack();
  };

  const cancelButton = () => {
    wrongAnswers = [];
    idList = [];
    round = 1;
    setQuestionFirst(true);
    setShowHint(false);
    setModalVisible(false);
    setQuestionList([]);
    practiceArr = [];
    handleResetPracticeArr();
    navigation.goBack();
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      const attempts = await AsyncStorage.getItem("@tries");
      if (jsonValue != null) {
        setScores(JSON.parse(jsonValue));
      } else {
        console.log("No scores imported");
      }
      if (attempts != null) {
        setDailyAttempts(JSON.parse(attempts));
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (scores.length === 0) getData();
    if (questionList.length === 0) {
      if (practiceArr.length > 0) {
        setQuestionList(practiceArr);
      } else {
        if (currArr[0] === "p") setFSize(40);
        switch (currArr) {
          case "n5":
            currArrList = n5Arr;
            break;
          case "n4":
            currArrList = n4Arr;
            break;
          case "n3":
            currArrList = n3Arr;
            break;
          case "n2":
            currArrList = n2Arr;
            break;
          case "g1":
            currArrList = g1Arr;
            break;
          case "g2":
            currArrList = g2Arr;
            break;
          case "g3":
            currArrList = g3Arr;
            break;
          case "g4":
            currArrList = g4Arr;
            break;
          case "g5":
            currArrList = g5Arr;
            break;
          case "g6":
            currArrList = g6Arr;
            break;
          case "g7":
            currArrList = g7Arr;
            break;
          case "g8":
            currArrList = g8Arr;
            break;
          case "g9":
            currArrList = g9Arr;
            break;
          case "g10":
            currArrList = g10Arr;
            break;
          case "g11":
            currArrList = g11Arr;
            break;
          case "g12":
            currArrList = g12Arr;
            break;
          case "g13":
            currArrList = g13Arr;
            break;
          case "g14":
            currArrList = g14Arr;
            break;
          case "g15":
            currArrList = g15Arr;
            break;
          case "g16":
            currArrList = g16Arr;
            break;
          case "g17":
            currArrList = g17Arr;
            break;
          case "g18":
            currArrList = g18Arr;
            break;
          case "g19":
            currArrList = g19Arr;
            break;
          case "g20":
            currArrList = g20Arr;
            break;
          case "g21":
            currArrList = g21Arr;
            break;
          case "g22":
            currArrList = g22Arr;
            break;
          case "g23":
            currArrList = g23Arr;
            break;
          case "present tense":
            currArrList = presentTenseArr;
            break;
          case "past tense":
            currArrList = pastTenseArr;
            break;
        }
      }
      if (practiceArr.length === 0) {
        let arr = [];
        if (currArr[0] === "n") {
          arr = generateQuestionArr(extraData[0], extraData[1]);
        } else if (currArr[0] === "p") {
          arr = generateTenseQuestionArr(extraData[0], extraData[1]);
        } else {
          arr = generateGenkiQuestionArr();
        }
        setQuestionList(arr);
        handleSetQuestion(arr);
      } else {
        handleSetQuestion(practiceArr);
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
    scores,
    hint,
    showHint,
    fSize,
  ]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          backgroundColor: "#114B5F",
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
          {cardFront && <Text style={styles.questionText}>{question}</Text>}
          {!cardFront && (
            <Text style={[styles.questionText, { fontSize: fSize }]}>
              {answer}
            </Text>
          )}
          {showHint && cardFront && (
            <Text style={styles.questionText}>{hint}</Text>
          )}
        </View>
      </TouchableHighlight>
      <View style={styles.bottomContainer}>
        <View
          style={[
            styles.buttonContainer,
            { marginTop: shuffleActive ? "10%" : "20%" },
          ]}
        >
          <TouchableHighlight
            style={[styles.buttonDisplay, { backgroundColor: "#dd1c1a" }]}
            onPress={handleWrong}
          >
            <Text style={styles.buttonText}>Wrong</Text>
          </TouchableHighlight>
          {!showHint && (
            <TouchableHighlight
              style={styles.buttonDisplay}
              onPress={handleCorrect}
            >
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableHighlight>
          )}
        </View>
        <View style={styles.shuffleButtonContainer}>
          {shuffleActive && !showHint && (
            <View>
              <TouchableHighlight
                style={[styles.buttonDisplay, { height: 40, width: 350 }]}
                onPress={handleShuffle}
              >
                <Text style={[styles.buttonText, { fontSize: 35 }]}>
                  Shuffle
                </Text>
              </TouchableHighlight>
              {currArr[0] !== "p" && (
                <TouchableHighlight
                  style={[
                    styles.buttonDisplay,
                    { height: 40, width: 350, marginTop: "3%" },
                  ]}
                  onPress={handleStartDef}
                >
                  {questionFirst ? (
                    <Text style={[styles.buttonText, { fontSize: 25 }]}>
                      Start With Definitions
                    </Text>
                  ) : (
                    <Text style={[styles.buttonText, { fontSize: 25 }]}>
                      Start With Kanji/Kana
                    </Text>
                  )}
                </TouchableHighlight>
              )}
            </View>
          )}
          {!showHint && cardFront && questionFirst && currArr[0] !== "p" && (
            <TouchableHighlight
              style={[
                styles.buttonDisplay,
                { height: 40, width: 350, marginTop: "3%" },
              ]}
              onPress={handleShowHint}
            >
              <Text style={[styles.buttonText, { fontSize: 25 }]}>
                Show Hint
              </Text>
            </TouchableHighlight>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    height: "50%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#114B5F",
    borderBottomWidth: 2,
    borderBottomColor: "#E0FF4F",
    shadowColor: "rgba(0, 0, 0, 1)",
  },
  bottomContainer: {
    height: "50%",
    justifyContent: "flex-start",
    backgroundColor: "#95a3a4",
  },
  iteratorContainer: {
    width: 80,
    marginLeft: 290,
    marginTop: 5,
    backgroundColor: "#114B5F",
    borderColor: "white",
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
    fontFamily: "HiraMinProN-W3",
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
    alignItems: "center",
    marginTop: "5%",
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
    color: "#fc440f",
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
