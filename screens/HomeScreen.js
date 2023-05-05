import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import Separator from "../components/Separator";
import MenuButton from "../components/MenuButton";

import { StatusBar } from "expo-status-bar";

function HomeScreen({
  navigation,
  handleUpdatePracticeArr,
  handleUpdateRandomArr,
  handleLevelChoice,
  randomArr,
}) {
  const [japanese, setJapanese] = useState(false);
  const [datadog, setDatadog] = useState(false);
  const title =
    !japanese && !datadog ? "Choose A Subject" : "Choose A Quiz Source";

  const handleGoBack = () => {
    setJapanese(false);
    setDatadog(false);
  };

  const handleJapanese = () => {
    setJapanese(true);
  };

  const handleDatadog = () => {
    setDatadog(true);
  };

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

  const handleMonitoring101 = () => {
    handleLevelChoice("Monitoring 101");
    navigation.navigate("Multi Choice");
  };

  const handleMonitoring102 = () => {
    handleLevelChoice("Monitoring 102");
    navigation.navigate("Multi Choice");
  };

  const handleMonitoring103 = () => {
    handleLevelChoice("Monitoring 103");
    navigation.navigate("Multi Choice");
  };

  useEffect(() => {}, [japanese, datadog]);

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> {title} </Text>
        </View>
        {!japanese && !datadog && (
          <View style={styles.buttonsContainer}>
            <MenuButton func={handleJapanese} level="Japanese" type="main" />
            <Separator />
            <MenuButton func={handleDatadog} level="Datadog" type="main" />
            <Separator />
          </View>
        )}
        {japanese && (
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
            <MenuButton func={handlePhrasesNav} level="Phrases" type="main" />
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
                level="Random"
                type="main"
              />
            )}
            <Separator />
            <MenuButton func={handleGoBack} level="Back To Main" type="main" />
            <Separator />
          </View>
        )}
        {datadog && (
          <View style={styles.buttonsContainer}>
            <MenuButton
              func={handleMonitoring101}
              level="Monitoring 101"
              type="main"
            />
            <Separator />
            <MenuButton
              func={handleMonitoring102}
              level="Monitoring 102"
              type="main"
            />
            <Separator />
            <MenuButton
              func={handleMonitoring103}
              level="Monitoring 103"
              type="main"
            />
            <Separator />
            <MenuButton func={handleGoBack} level="Back To Main" type="main" />
            <Separator />
          </View>
        )}
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
