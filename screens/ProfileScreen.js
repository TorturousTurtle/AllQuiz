import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BackgroundImage from "../components/BackgroundImage";
import Separator from "../components/Separator";
import QuizSizeModal from "../components/QuizSizeModal";

import { findKnownWordsFunc } from "../utilities/findKnownWordsFunc";

import { StatusBar } from "expo-status-bar";

function ProfileScreen({ scores }) {
  const [known, setKnown] = useState(null);
  const [quizSize, setQuizSize] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    getData();
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const getData = async () => {
    try {
      const size = await AsyncStorage.getItem("@numQuestions");
      if (size !== null) {
        let num = JSON.parse(size);
        setQuizSize(num.num);
      }
      let obj = findKnownWordsFunc(scores);
      obj["unknown"] = obj.total - obj.known;
      obj["completed"] = Math.floor(
        (parseFloat(obj.known) / obj.total) * 100
      ).toString();
      setKnown(obj);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (known === null && scores !== null) getData();
  }, [scores, known, quizSize]);
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Profile </Text>
        </View>
        {known && (
          <View style={{ marginTop: "10%" }}>
            <Text style={styles.notSeenText}>
              Total Words Learned: {known.known}
            </Text>
            <Separator />
            <Text style={styles.notSeenText}>
              Kanji/Kana Not Seen Yet: {known.unknown}/{known.total}
            </Text>
            <Separator />
            <Text style={styles.notSeenText}>
              Percentage Completed: {known.completed}%
            </Text>
            <Separator />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.notSeenText}>
                Questions Per Quiz: {quizSize}
              </Text>
              <Text style={styles.editButton} onPress={handleOpenModal}>
                Edit
              </Text>
            </View>
          </View>
        )}
      </BackgroundImage>
      <QuizSizeModal
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
      />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: "20%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
  notSeenText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  editButton: {
    color: "blue",
  },
});

export default ProfileScreen;
