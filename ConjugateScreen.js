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

const tenseArr = ["Present Tense", "Past Tense"];

const Separator = () => <View style={styles.separator} />;

function ConjugateScreen({
  navigation,
  handleLevelChoice,
  handleUpdateRange
}) {
  const handleOptionPress = (choice) => {
    handleLevelChoice(choice);
    handleUpdateRange([0, 0], choice);
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    return (
      <View>
        <LevelButton func={handleOptionPress} level={item} />
        <Separator />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/QuizAppLogoAdjusted.png")}
        style={styles.homeScreenBackground}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Tense </Text>
        </View>
        <View style={styles.scrollContainer}>
        <ScrollView>
        <View style={styles.buttonsContainer}>
          {tenseArr.map((item, index) => renderItem(item, index))}
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
    marginTop: "20%",
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

export default ConjugateScreen;
