import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

import QuizButton from "./components/QuizButton";
import { n5Arr } from "./assets/N5VocabArr";
import { n4Arr } from "./assets/N4VocabArr";
import { n3Arr } from "./assets/N3VocabArr";
import { n2Arr } from "./assets/N2VocabArr";

const Separator = () => <View style={styles.separator} />;

const generateArrForFlatList = (arr) => {
  let sizeArr = [];
  for (let i = 0; i < Math.ceil(arr.length / 50); i++) {
    sizeArr.push(i);
  }
  return sizeArr;
};

function QuizScreen({ navigation, handleUpdateRange, listChoice }) {
  const [startValue, setStartValue] = useState("0");
  const [endValue, setEndValue] = useState("0");
  const [listArr, setListArr] = useState([]);
  const [quizArr, setQuizArr] = useState([]);

  const startQuiz = (range) => {
    handleUpdateRange(range, listChoice);
    navigation.navigate("Flash Cards");
  };

  const startQuiz16 = () => {
    const endRange = quizArr.length;
    handleUpdateRange([0, endRange], listChoice);
    navigation.navigate("Flash Cards");
  };

  const startQuiz17 = () => {
    handleUpdateRange([startValue, endValue], listChoice);
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    let x = item * 50 + 1;
    let y = x + 49;
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
        <QuizButton func={startQuiz} range={arr} id={index.toString()} />
        <Separator />
      </View>
    );
  };

  useEffect(() => {
    if (listArr.length === 0) {
      let currArrList = [];
      switch(listChoice){
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
      let arr = generateArrForFlatList(currArrList);
      setListArr(arr);
      setQuizArr(currArrList);
    }
  }, [startValue, endValue, listArr, quizArr]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/QuizAppLogoAdjusted.png")}
        style={styles.homeScreenBackground}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>
            Which would you like to practice?
          </Text>
        </View>
        <View style={styles.customContainer}>
          <TouchableHighlight
            underlayColor="#757f8a"
            style={[styles.buttonContainer, { width: "50%" }]}
            onPress={startQuiz17}
          >
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableHighlight>
          <View style={styles.infoContainer}>
            <Text style={styles.labels}>Start</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={1}
              onPress={() => {
                // lbsBox.current.focus();
                null;
              }}
            >
              <TextInput
                placeholder={"0"}
                placeholderTextColor="white"
                onChangeText={(text) => setStartValue(text)}
                clearTextOnFocus={true}
                keyboardType="number-pad"
                value={startValue}
                underlineColorAndroid="transparent"
                ref={null}
                style={styles.inputText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.labels}>End</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={1}
              onPress={() => {
                // lbsBox.current.focus();
                null;
              }}
            >
              <TextInput
                placeholder={"0"}
                placeholderTextColor="white"
                onChangeText={(text) => setEndValue(text)}
                clearTextOnFocus={true}
                keyboardType="number-pad"
                value={endValue}
                underlineColorAndroid="transparent"
                ref={null}
                style={styles.inputText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              {listArr.map((item, index) => renderItem(item, index))}
            </View>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.customerButtonContainer}>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz16}
          >
            <Text style={styles.buttonText}>Random 50</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
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
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "15%",
    height: "75%",
  },
  inputContainer: {
    backgroundColor: "grey",
    width: "100%",
    borderRadius: 5,
  },
  scrollContainer: {
    height: "60%",
  },
  homeScreenBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
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
  inputText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default QuizScreen;
