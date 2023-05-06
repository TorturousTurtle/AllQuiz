import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

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
  handleUpdateRange,
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

  const handleMonitoring101Flash = () => {
    handleLevelChoice("Monitoring 101 Flash");
    handleUpdateRange([0, 0], "Monitoring 101 Flash");
    navigation.navigate("Flash Cards");
  };

  const handleMonitoring102 = () => {
    handleLevelChoice("Monitoring 102");
    navigation.navigate("Multi Choice");
  };
  const handleMonitoring102Flash = () => {
    handleLevelChoice("Monitoring 102 Flash");
    handleUpdateRange([0, 0], "Monitoring 102 Flash");
    navigation.navigate("Flash Cards");
  };

  const handleMonitoring103 = () => {
    handleLevelChoice("Monitoring 103");
    navigation.navigate("Multi Choice");
  };
  const handleMonitoring103Flash = () => {
    handleLevelChoice("Monitoring 103 Flash");
    handleUpdateRange([0, 0], "Monitoring 103 Flash");
    navigation.navigate("Flash Cards");
  };

  const handlek8s1 = () => {
    handleLevelChoice("mk8s1");
    navigation.navigate("Multi Choice");
  };

  const handleMK8S1Flash = () => {
    handleLevelChoice("mk8s1Flash");
    handleUpdateRange([0, 0], "mk8s1Flash");
    navigation.navigate("Flash Cards");
  };

  const handlek8s2 = () => {
    handleLevelChoice("mk8s2");
    navigation.navigate("Multi Choice");
  };

  const handleMK8S2Flash = () => {
    handleLevelChoice("mk8s2Flash");
    handleUpdateRange([0, 0], "mk8s2Flash");
    navigation.navigate("Flash Cards");
  };

  const handlek8s3 = () => {
    handleLevelChoice("mk8s3");
    navigation.navigate("Multi Choice");
  };

  const handleMK8S3Flash = () => {
    handleLevelChoice("mk8s3Flash");
    handleUpdateRange([0, 0], "mk8s3Flash");
    navigation.navigate("Flash Cards");
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
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.buttonsContainer}>
              <MenuButton
                func={handleMonitoring101}
                level="Monitoring 101"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMonitoring101Flash}
                level="Monitoring 101 Flash Cards"
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
                func={handleMonitoring102Flash}
                level="Monitoring 102 Flash Cards"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMonitoring103}
                level="Monitoring 103"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMonitoring103Flash}
                level="Monitoring 103 Flash Cards"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handlek8s1}
                level="Kubernetes Part 1"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMK8S1Flash}
                level="Kubernetes Part 1 Flash Cards"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handlek8s2}
                level="Kubernetes Part 2"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMK8S2Flash}
                level="Kubernetes Part 2 Flash Cards"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handlek8s3}
                level="Kubernetes Part 3"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleMK8S3Flash}
                level="Kubernetes Part 3 Flash Cards"
                type="main"
              />
              <Separator />
              <MenuButton
                func={handleGoBack}
                level="Back To Main"
                type="main"
                fixed={true}
              />
              <Separator />
            </View>
          </ScrollView>
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
    marginTop: "5%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
});

export default HomeScreen;
