import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuizCardHeader from "../components/QuizCardHeader";
import QuizCard from "../components/QuizCard";
import QuizCardBottom from "../components/QuizCardBottom";

import { arrFunctionPicker } from "../utilities/arrFunctionPicker";
import {
  generateTenseQuestionArr,
  generateQuestionArr,
  generateGenkiQuestionArr,
  generatePhrasesArr,
  populateNextRound,
  shuffleQuestions,
} from "../utilities/arrGenerationFuncs";
// import {
//   getScores,
//   getAttempts,
//   updateScoreList,
// } from "../utilities/dataFuncs";

let wrongAnswers = [];
let idList = [];
let currArrList = [];
let round = 1;

const DisplayCard = ({
  extraData,
  currArr,
  practiceArr,
  handleResetPracticeArr,
  qFirst,
  quizSize,
}) => {
  const [questionList, setQuestionList] = useState([]);
  const [qIterator, setQIterator] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffleActive, setShuffleActive] = useState(true);
  const [questionFirst, setQuestionFirst] = useState(qFirst);
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
    return JSON.parse(JSON.stringify(x));
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
      let score = updateScoreList(scores, questionList[qIterator], "correct");
      setScores(score);
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
      let score = updateScoreList(scores, questionList[qIterator], "wrong");
      setScores(score);
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
    let arr = populateNextRound(wrongAnswers);
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
    wrongAnswers = [];
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
      if (currArr[0] === "a") {
        setQuestionFirst(false);
      }
      if (practiceArr.length > 0) {
        setQuestionList(practiceArr);
      } else {
        if (currArr[0] === "p" || currArr[0] === "i") setFSize(35);
        currArrList = arrFunctionPicker(currArr);
      }
      if (practiceArr.length === 0) {
        let arr = [];
        if (currArr[0] === "n") {
          arr = generateQuestionArr(
            currArrList,
            extraData[0],
            extraData[1],
            idList,
            quizSize
          );
        } else if (currArr[0] === "p" || currArr[0] === "i") {
          arr = generateTenseQuestionArr(
            currArrList,
            extraData[0],
            extraData[1],
            idList,
            quizSize
          );
        } else if (currArr[0] === "a" || currArr[0] === "m" || currArr[0] === "M") {
          arr = generatePhrasesArr(currArrList, idList, quizSize);
        } else {
          arr = generateGenkiQuestionArr(currArrList, idList);
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
      <QuizCardHeader
        cancelButton={cancelButton}
        qIterator={qIterator}
        length={questionList.length}
      />
      <QuizCard
        handleFlip={handleFlip}
        cardFront={cardFront}
        question={question}
        answer={answer}
        showHint={showHint}
        hint={hint}
        fSize={fSize}
      />
      <QuizCardBottom
        shuffleActive={shuffleActive}
        handleWrong={handleWrong}
        showHint={showHint}
        handleCorrect={handleCorrect}
        handleShuffle={handleShuffle}
        handleStartDef={handleStartDef}
        questionFirst={questionFirst}
        cardFront={cardFront}
        currArr={currArr}
        handleShowHint={handleShowHint}
        modalVisible={modalVisible}
        round={round}
        questionList={questionList}
        wrongAnswers={wrongAnswers}
        handleNextRound={handleNextRound}
        goHome={goHome}
      />
    </View>
  );
};

export default DisplayCard;
