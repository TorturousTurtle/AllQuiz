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
  FlatList,
} from "react-native";

import QuizButton from "./components/QuizButton";
import { n5Arr } from "./assets/N5VocabArr";

const Separator = () => <View style={styles.separator} />;

const generateArrForFlatList = () => {
  let sizeArr = [];
  for (let i = 0; i < Math.ceil(n5Arr.length / 50); i++) {
    sizeArr.push(i);
  }
  return sizeArr;
};

function TestScreen({ navigation, handleUpdateRange }) {
  const [startValue, setStartValue] = useState("0");
  const [endValue, setEndValue] = useState("0");
  const [listArr, setListArr] = useState([]);
  const arr = "n5";

  const startQuiz = (range) => {
      console.log(range)
    handleUpdateRange(range, "n5");
    navigation.navigate("Flash Cards");
  };

  const startQuiz16 = () => {
    handleUpdateRange([0, 727], "n5");
    navigation.navigate("Flash Cards");
  };

  const startQuiz17 = () => {
    handleUpdateRange([startValue, endValue], "n5");
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item) => {
    let x = item * 50 + 1;
    let y = x + 49;
    let arr = [];
    if (y < n5Arr.length) {
      arr.push(x);
      arr.push(y);
    } else {
      arr.push(x);
      arr.push(n5Arr.length);
    }
    return (
      <View>
        <QuizButton func={startQuiz} range={arr} />
        <Separator />
      </View>
    );
  };

  useEffect(() => {
    if (listArr.length === 0) {
      let arr = generateArrForFlatList();
      setListArr(arr);
    }
  }, [startValue, endValue, listArr]);

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
              {listArr.map((item) => renderItem(item))}
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

export default TestScreen;
