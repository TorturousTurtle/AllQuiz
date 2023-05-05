import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import QuizCardHeader from "../components/QuizCardHeader";
import QuizCardMulti from "../components/QuizCardMulti";
import QuizCardBottomMulti from "../components/QuizCardBottomMulti";
import MultiChoiceModal from "../components/MultiChoiceModal";

import { arrFunctionPicker } from "../utilities/arrFunctionPicker";

let currArrList = [];

function randomizeArr(arr, n) {
  if (n > arr.length) {
    n = arr.length - 1;
  }

  let result = [];
  let availableIndices = Array.from({ length: arr.length }, (_, i) => i);

  while (result.length < n) {
    let randomIndex = Math.floor(Math.random() * availableIndices.length);
    let selectedIndex = availableIndices.splice(randomIndex, 1)[0];
    result.push(arr[selectedIndex]);
  }
  return result;
}

const DisplayMultiChoiceScreen = ({ navigation, currArr, quizSize }) => {
  const [questionList, setQuestionList] = useState([]);
  const [question, setQuestion] = useState(null);
  const [qIterator, setQIterator] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fSize, setFSize] = useState(25);
  const updateQIterator = () => {
    let i = qIterator + 1;
    setQIterator(i);
    setQuestion(questionList[qIterator][0]);
    setShowModal(false);
  };

  const handleCorrect = () => {
    if (qIterator === questionList.length - 1) {
      cancelButton();
    } else {
      updateQIterator();
    }
  };

  const handleWrong = () => {
    setShowModal(true);
  };

  const cancelButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (questionList.length === 0) {
      currArrList = arrFunctionPicker(currArr);
      const temp = randomizeArr(currArrList, quizSize);
      setQuestionList(temp);
      setQuestion(temp[qIterator][0]);
    } else {
      setQuestion(questionList[qIterator][0]);
    }
  }, [qIterator, question, questionList, setQuestion]);
  return (
    <View>
      <QuizCardHeader
        cancelButton={cancelButton}
        qIterator={qIterator}
        length={questionList.length}
      />
      <QuizCardMulti
        question={question}
        fSize={fSize}
        setQuestion={setQuestion}
      />
      {question && (
        <QuizCardBottomMulti
          handleWrong={handleWrong}
          handleCorrect={handleCorrect}
          currArr={questionList[qIterator]}
          modalVisible={false}
        />
      )}
      {showModal && (
        <MultiChoiceModal
          updateQIterator={updateQIterator}
          cancelButton={cancelButton}
          iterator={qIterator}
          question={questionList}
          modalVisible={showModal}
        />
      )}
    </View>
  );
};

export default DisplayMultiChoiceScreen;
