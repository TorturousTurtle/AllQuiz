import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
  ScrollView,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

import { n5Arr } from "../assets/N5VocabArr";
import { n4Arr } from "../assets/N4VocabArr";
import { n3Arr } from "../assets/N3VocabArr";
import { n2Arr } from "../assets/N2VocabArr";
import { g1Arr } from "../assets/G1VocabArr";
import { g2Arr } from "../assets/G2VocabArr";
import { g3Arr } from "../assets/G3VocabArr";
import { g4Arr } from "../assets/G4VocabArr";
import { g5Arr } from "../assets/G5VocabArr";
import { g6Arr } from "../assets/G6VocabArr";
import { g7Arr } from "../assets/G7VocabArr";
import { g8Arr } from "../assets/G8VocabArr";
import { g9Arr } from "../assets/G9VocabArr";
import { g10Arr } from "../assets/G10VocabArr";
import { g11Arr } from "../assets/G11VocabArr";
import { g12Arr } from "../assets/G12VocabArr";
import { g13Arr } from "../assets/G13VocabArr";
import { g14Arr } from "../assets/G14VocabArr";
import { g15Arr } from "../assets/G15VocabArr";
import { g16Arr } from "../assets/G16VocabArr";
import { g17Arr } from "../assets/G17VocabArr";
import { g18Arr } from "../assets/G18VocabArr";
import { g19Arr } from "../assets/G19VocabArr";
import { g20Arr } from "../assets/G20VocabArr";
import { g21Arr } from "../assets/G21VocabArr";
import { g22Arr } from "../assets/G22VocabArr";
import { g23Arr } from "../assets/G23VocabArr";

const masterQuizList = [
  { label: "Sort By Least Known", value: "leastKnown" },
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

function ScoreScreen({ navigation, numAttempts, updateDailyTries }) {
  const [scores, setScores] = useState([]);
  const [arrList, setArrList] = useState([]);
  const [dailyAttempts, setDailyAttempts] = useState(null);
  const [open, setOpen] = useState(false);
  const [quizList, setQuizList] = useState("leastKnown");
  const [items, setItems] = useState(masterQuizList);
  const [refreshing, setRefreshing] = useState(false);
  const [leastKnownArr, setLeastKnownArr] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [kanji, setKanji] = useState("");
  const [kana, setKana] = useState("");
  const [definition, setDefinition] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [numNotSeen, setNumNotSeen] = useState(0);
  const [percentageCompleted, setPercentageComplete] = useState("0");

  const onRefresh = () => {
    let notSeen = 0;
    setRefreshing(true);
    wait(500).then(() => {
      let tries = updateDailyTries();
      setDailyAttempts(numAttempts);
      for (let i = 0; i < arrList.length; i++) {
        let x = arrList[i];
        let average = scores[x[0]].average;
        if (average === 0) {
          notSeen++;
        }
      }
      setNumNotSeen(notSeen);
      setRefreshing(false);
    });
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const getData = async () => {
    setDailyAttempts(numAttempts);
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      if (jsonValue != null) {
        let arr = [];
        let temp = [];
        let score = JSON.parse(jsonValue);
        setScores(score);
        for (const key in score) {
          let x = [key, score[key]["average"], score[key]["question"]];
          arr.push(x);
        }
        arr.sort(function (a, b) {
          return a[1] - b[1];
        });
        for (const x in arr) {
          if (arr[x][1] !== 0) {
            if (temp.length < 1000) temp.push(arr[x][2]);
          }
        }
        setLeastKnownArr(temp);
      } else {
        console.log("No scores imported");
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const setScoreList = () => {
    let currArrList = null;
    let notSeen = 0;
    switch (quizList) {
      case "leastKnown":
        currArrList = leastKnownArr;
        break;
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
    if (currArrList) {
      for (let i = 0; i < currArrList.length; i++) {
        let x = currArrList[i];
        let average = scores[x[0]].average;
        if (average === 0) {
          notSeen++;
        }
      }
    }
    setNumNotSeen(notSeen);
  };

  const renderItem = (item, index) => {
    const x = scores[item[0]];
    const kanji = x.question[1].length > 0 ? x.question[1] : x.question[2];
    const avg = Math.floor(x.average * 100).toString() + "%";

    const handleShowHistory = () => {
      setKanji(scores[item[0]].question[1]);
      setKana(scores[item[0]].question[2]);
      setDefinition(scores[item[0]].question[3]);
      setCorrect(scores[item[0]].correct);
      setWrong(scores[item[0]].wrong);
      setAverage(avg);
      setTotal(scores[item[0]].correct + scores[item[0]].wrong);
      setShowModal(true);
    };

    return (
      <TouchableHighlight onPress={handleShowHistory}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            {index + 1}: {kanji}
          </Text>
          <Text style={styles.scoreText}>{avg}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  useEffect(() => {
    if (scores.length === 0) getData();
    setScoreList();
    setDailyAttempts(numAttempts);
    let avg = arrList
      ? Math.floor(
          (parseFloat(arrList.length - numNotSeen) / arrList.length) * 100
        ).toString()
      : "0";
    setPercentageComplete(avg);
  }, [
    scores,
    open,
    quizList,
    dailyAttempts,
    items,
    arrList,
    refreshing,
    leastKnownArr,
    kanji,
    kana,
    definition,
    correct,
    wrong,
    average,
    total,
    showModal,
    numNotSeen,
    percentageCompleted,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.attemptsContainer}>
        <Text style={styles.attemptsText}>
          Quizzes Taken Today: {dailyAttempts ? dailyAttempts.attempts : 0}
        </Text>
        <Text style={styles.attemptsText}>
          Total Cards Studied:{" "}
          {dailyAttempts ? dailyAttempts.totalStudiedToday : 0}
        </Text>
      </View>
      <DropDownPicker
        open={open}
        value={quizList}
        items={items}
        setOpen={setOpen}
        setValue={setQuizList}
        setItems={setItems}
        containerStyle={{ width: "80%", marginTop: "3%" }}
        textStyle={{ fontSize: 20, fontWeight: "bold" }}
      />
      <View style={{ marginTop: "2%" }}>
        {quizList && (
          <View>
            <Text style={styles.notSeenText}>
              Number of Kanji/Kana Not Seen Yet: {numNotSeen}/
              {arrList ? arrList.length : 0}
            </Text>
            <Text style={styles.notSeenText}>
              Percentage Completed: {percentageCompleted}%
            </Text>
          </View>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.notSeenText}>Kanji/Kana</Text>
        <Text style={styles.notSeenText}>Average %</Text>
      </View>
      {!showModal && (
        <ScrollView
          style={styles.scrollContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {arrList && arrList.map((item, index) => renderItem(item, index))}
        </ScrollView>
      )}
      <View style={styles.modalMainContainer}>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.modalContainer}>
            {kanji.length > 0 && (
              <Text style={styles.modalText} selectable={true}>
                {kanji}
              </Text>
            )}
            <Text style={styles.modalText} selectable={true}>
              {kana}
            </Text>
            <Text> </Text>
            <Text
              style={[styles.scoreText, { fontSize: 45, textAlign: "center" }]}
            >
              {definition}
            </Text>
            <Text> </Text>
            <Text style={styles.scoreText}>Correct: {correct}</Text>
            <Text style={styles.scoreText}>Incorrect: {wrong}</Text>
            <Text style={styles.scoreText}>Average: {average}</Text>
            <Text style={styles.scoreText}>Total Times Seen: {total}</Text>
            <View style={styles.listContainer}>
              <View style={styles.modalButtonContainer}>
                <TouchableHighlight
                  style={[styles.modalButton, { backgroundColor: "#dd1c1a" }]}
                  onPress={handleHideModal}
                >
                  <Text style={styles.buttonText}>Hide</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
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
  scrollContainer: {},
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: 350,
    paddingLeft: 10,
    paddingRight: 10,
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
  modalMainContainer: {},
  modalContainer: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#45ba55",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%",
    marginLeft: "5%",
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  historyContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#45ba55",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonContainer: {
    marginTop: 1,
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
  notSeenText: {
    fontSize: 20,
    fontWeight: "bold",
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
  modalText: {
    fontSize: 45,
    textDecorationLine: "underline",
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    marginTop: 20,
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
  listContainer: {
    justifyContent: "center",
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
});

export default ScoreScreen;
