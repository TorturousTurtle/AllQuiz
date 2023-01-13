import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import _ from "lodash";

import LevelButton from "./components/LevelButton";

const levelArr = ["N5", "N4", "N3", "N2"];

const Separator = () => <View style={styles.separator} />;

function HomeScreen({
  navigation,
  handleLevelChoice,
  handleUpdatePracticeArr,
}) {
  const [scores, setScores] = useState([]);
  const handleOptionPress = (choice) => {
    screen = choice.toUpperCase() + " Vocabulary";
    handleLevelChoice(choice);
    navigation.navigate("Quiz Screen");
  };

  const handleLeastKnownClick = () => {
    handleUpdatePracticeArr(scores);
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item) => {
    return (
      <View>
        <LevelButton func={handleOptionPress} level={item} />
        <Separator />
      </View>
    );
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      if (jsonValue != null) {
        let score = JSON.parse(jsonValue);
        let arr = [];
        let temp = [];
        for (const key in score) {
          let x = [key, score[key]["average"], score[key]["question"]];
          arr.push(x);
        }
        arr.sort(function (a, b) {
          return a[1] - b[1];
        });
        for (const x in arr) {
          if (arr[x][1] !== 0) {
            if (temp.length < 50) temp.push(arr[x][2]);
          }
        }
        setScores(temp);
      } else {
        console.log("No scores imported");
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (scores.length === 0) getData();
  }, [scores]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/QuizAppLogoAdjusted.png")}
        style={styles.homeScreenBackground}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Level </Text>
        </View>
        <View style={styles.buttonsContainer}>
          {levelArr.map((item) => renderItem(item))}
        </View>
        <TouchableHighlight
          underlayColor="#757f8a"
          style={[styles.buttonContainer, { marginTop: "5%"}]}
          onPress={handleLeastKnownClick}
        >
          <Text style={styles.buttonText}> Least Known </Text>
        </TouchableHighlight>
        <Separator />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
