import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

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

import { masterVocabScores } from "./assets/MasterVocabScores";

const masterQuizList = [
  { label: "JLPT N5", value: "n5" },
  { label: "JLPT N4", value: "n4" },
  { label: "JLPT N3", value: "n3" },
  { label: "JLPT N2", value: "n2" },
  { label: "Genki Chapter 1", value: "g1" },
  { label: "Genki Chapter 2", value: "g2" },
  { label: "Genki Chapter 3", value: "g3" },
  { label: "Genki Chapter 4", value: "g4" },
  { label: "Genki Chapter 5", value: "g5" },
  { label: "Genki Chapter 6", value: "g6" },
  { label: "Genki Chapter 7", value: "g7" },
  { label: "Genki Chapter 8", value: "g8" },
  { label: "Genki Chapter 9", value: "g9" },
  { label: "Genki Chapter 10", value: "g10" },
  { label: "Genki Chapter 11", value: "g11" },
  { label: "Genki Chapter 12", value: "g12" },
  { label: "Genki Chapter 13", value: "g13" },
  { label: "Genki Chapter 14", value: "g14" },
  { label: "Genki Chapter 15", value: "g15" },
  { label: "Genki Chapter 16", value: "g16" },
  { label: "Genki Chapter 17", value: "g17" },
  { label: "Genki Chapter 18", value: "g18" },
  { label: "Genki Chapter 19", value: "g19" },
  { label: "Genki Chapter 20", value: "g20" },
  { label: "Genki Chapter 21", value: "g21" },
  { label: "Genki Chapter 22", value: "g22" },
  { label: "Genki Chapter 23", value: "g23" },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function ScoreScreen({ navigation, numAttempts }) {
  const [scores, setScores] = useState([]);
  const [arrList, setArrList] = useState([]);
  const [dailyAttempts, setDailyAttempts] = useState({});
  const [open, setOpen] = useState(false);
  const [quizList, setQuizList] = useState(null);
  const [items, setItems] = useState(masterQuizList);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  const storeAttempts = async (obj) => {
    try {
      const jsonValue = JSON.stringify(obj);
      await AsyncStorage.setItem("@tries", jsonValue);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      const tries = await AsyncStorage.getItem("@tries");
      const date = new Date();
      if (jsonValue != null) {
        setScores(JSON.parse(jsonValue));
      } else {
        console.log("No scores imported");
      }
      if (tries != null) {
        let x = JSON.parse(tries);
        let oldDate = new Date(Date.parse(x.date));
        let day1 = oldDate.getDay();
        let month1 = oldDate.getMonth();
        if (day1 < date.getDay() && month1 <= date.getMonth()) {
          let obj = {
            attempts: 0,
            date: date,
          };
          setDailyAttempts(obj);
        } else {
          setDailyAttempts(x);
        }
      } else {
        let obj = {
          attempts: 0,
          date: date,
        };

        setDailyAttempts(obj);
        storeAttempts(obj);
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const setScoreList = () => {
    let currArrList = null;
    switch (quizList) {
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
    }
    setArrList(currArrList);
  };

  const renderItem = (item, index) => {
    const x = scores[item[0]];
    const kanji = x.question[1].length > 0 ? x.question[1] : x.question[2];
    const avg = (Math.floor(x.average * 100)).toString() + "%";
    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          {index + 1}: {kanji}
        </Text>
        <Text style={styles.scoreText}>{avg}</Text>
      </View>
    );
  };

  useEffect(() => {
    if (!dailyAttempts.hasOwnProperty("date")) getData();
    setScoreList();
  }, [scores, dailyAttempts, open, quizList, items, arrList, refreshing]);

  return (
    <View style={styles.container}>
      <View style={styles.attemptsContainer}>
        <Text style={styles.attemptsText}>
          Quizzes Taken Today: {numAttempts}
        </Text>
      </View>
      <DropDownPicker
        open={open}
        value={quizList}
        items={items}
        setOpen={setOpen}
        setValue={setQuizList}
        setItems={setItems}
        containerStyle={{ width: "80%" }}
        textStyle={{ fontSize: 20, fontWeight: "bold" }}
      />
      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {arrList && arrList.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#114B5F",
  },
  attemptsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  scrollContainer: {
    marginTop: "5%",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    height: 40,
    width: 350,
    paddingLeft: 10,
    paddingRight: 10,
  },
  attemptsText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  scoreText: {
    fontSize: 25,
    color: "white",
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
});

export default ScoreScreen;
