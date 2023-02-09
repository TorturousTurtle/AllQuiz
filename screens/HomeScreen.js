import React from "react";
import { Text, View, StyleSheet } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import Separator from "../components/Separator";
import MenuButton from "../components/MenuButton";

import { StatusBar } from "expo-status-bar";

function HomeScreen({
  navigation,
  handleUpdatePracticeArr,
  handleUpdateRandomArr,
  randomArr,
}) {
  const handleJLPTNav = () => {
    navigation.navigate("JLPT Levels");
  };

  const handleGenkiNav = () => {
    navigation.navigate("Genki Chapters");
  };

  const handleConjugateNav = () => {
    navigation.navigate("Verb Conjugation");
  };

  const handlePhrasesNav = () => {
    navigation.navigate("Phrases");
  };

  const handleLeastKnownClick = () => {
    handleUpdatePracticeArr();
    navigation.navigate("Flash Cards");
  };

  const handleRandomQuizClick = () => {
    handleUpdateRandomArr();
    navigation.navigate("Flash Cards");
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Quiz Source </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MenuButton func={handleJLPTNav} level="JLPT" type="main" />
          <Separator />
          <MenuButton func={handleGenkiNav} level="Genki" type="main" />
          <Separator />
          <MenuButton
            func={handleConjugateNav}
            level="Conjugation Practice"
            type="main"
          />
          <Separator />
          <MenuButton
            func={handlePhrasesNav}
            level="Phrases"
            type="main"
          />
          <Separator />
          {randomArr.length > 0 && (
            <MenuButton
              func={handleLeastKnownClick}
              level="Least Known"
              type="main"
            />
          )}
          <Separator />
          {randomArr.length > 0 && (
            <MenuButton
              func={handleRandomQuizClick}
              level="Random 50"
              type="main"
            />
          )}
          <Separator />
        </View>
      </BackgroundImage>
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
});

export default HomeScreen;
