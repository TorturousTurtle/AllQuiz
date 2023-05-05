import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import MenuButton from "../components/MenuButton";
import Separator from "../components/Separator";
import CustomPracticeInput from "../components/CustomPracticeInput";

import { n5Arr } from "../assets/N5VocabArr";
import { n4Arr } from "../assets/N4VocabArr";
import { n3Arr } from "../assets/N3VocabArr";
import { n2Arr } from "../assets/N2VocabArr";

const generateArrForFlatList = (arr, size) => {
  let sizeArr = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    sizeArr.push(i);
  }
  return sizeArr;
};

function QuizScreen({
  navigation,
  handleUpdateRange,
  listChoice,
  handleLeastPracticedArr,
  size
}) {
  const [startValue, setStartValue] = useState("0");
  const [endValue, setEndValue] = useState("0");
  const [listArr, setListArr] = useState([]);
  const [quizArr, setQuizArr] = useState([]);

  const handleUpdateStart = (text) => {
    setStartValue(text);
  };

  const handleUpdateEnd = (text) => {
    setEndValue(text);
  };

  const startQuiz = (range) => {
    handleUpdateRange(range, listChoice);
    navigation.navigate("Flash Cards");
  };

  const handleRandomQuizClick = () => {
    const endRange = quizArr.length;
    handleUpdateRange([0, endRange], listChoice);
    navigation.navigate("Flash Cards");
  };

  const handleLeastPracticedClick = () => {
    handleLeastPracticedArr(quizArr);
    navigation.navigate("Flash Cards");
  };

  const handleCustomQuizClick = () => {
    handleUpdateRange([startValue, endValue], listChoice);
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    let x = item * size + 1;
    let y = x + (size - 1);
    let arr = [];
    if (y < quizArr.length) {
      arr.push(x);
      arr.push(y);
    } else {
      arr.push(x);
      arr.push(quizArr.length);
    }
    return (
      <View>
        <MenuButton
          func={startQuiz}
          level={arr}
          type="range"
          id={index.toString()}
        />
        <Separator />
      </View>
    );
  };

  useEffect(() => {
    if (listArr.length === 0) {
      let currArrList = [];
      switch (listChoice) {
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
      }
      if(size === null) size = 50;
      let arr = generateArrForFlatList(currArrList, size);
      setListArr(arr);
      setQuizArr(currArrList);
    }
  }, [startValue, endValue, listArr, quizArr, size]);

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>
            Which would you like to practice?
          </Text>
        </View>
        <View style={styles.customContainer}>
          <TouchableHighlight
            underlayColor="#757f8a"
            style={[styles.buttonContainer, { width: "50%" }]}
            onPress={handleCustomQuizClick}
          >
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableHighlight>
          <CustomPracticeInput
            func={handleUpdateStart}
            title="Start"
            value={startValue}
          />
          <CustomPracticeInput
            func={handleUpdateEnd}
            title="End"
            value={endValue}
          />
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              <MenuButton
                func={handleRandomQuizClick}
                level="Random"
                type="level"
              />
              <Separator />
              <MenuButton
                func={handleLeastPracticedClick}
                level="Least Practiced"
                type="level"
              />
              <Separator />
              {listArr.map((item, index) => renderItem(item, index))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  customContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2%",
    height: "10%",
    width: "75%",
  },
  scrollContainer: {
    height: "60%",
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    height: "80%",
  },
  buttonContainer: {
    width: 300,
    height: 50,
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textHeader: {
    fontSize: 30,
  },
});

export default QuizScreen;
