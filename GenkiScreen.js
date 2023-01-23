import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ScrollView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import _ from "lodash";

import LevelButton from "./components/LevelButton";

const levelArr = ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12", "G13", "G14", "G15", "G16", "G17", "G18", "G19", "G20", "G21", "G22", "G23", "G24"];

const Separator = () => <View style={styles.separator} />;

function GenkiScreen({
  navigation,
  handleLevelChoice,
  handleUpdatePracticeArr,
  handleUpdateRange
}) {
  const [scores, setScores] = useState([]);
  const handleOptionPress = (choice) => {
    const x = +choice.slice(-1);
    const chapter = levelArr[x - 1];
    handleLevelChoice(chapter.toLowerCase());
    handleUpdateRange([0, 0], chapter.toLowerCase());
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    const chapter = "Chapter " + (index + 1);
    return (
      <View>
        <LevelButton func={handleOptionPress} level={chapter} />
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
          <Text style={styles.textHeader}> Choose A Chapter </Text>
        </View>
        <View style={styles.scrollContainer}>
        <ScrollView>
        <View style={styles.buttonsContainer}>
          {levelArr.map((item, index) => renderItem(item, index))}
        </View>
        </ScrollView>
        </View>
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
  scrollContainer: {
    height: "75%"
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

export default GenkiScreen;
