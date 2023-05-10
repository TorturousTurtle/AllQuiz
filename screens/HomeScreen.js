import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import QuizChoiceModal from "../components/QuizChoiceModal";

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
  const [observability, setObservability] = useState(false);
  const [rapdev, setRapdev] = useState(false);
  const [containers, setContainers] = useState(false);
  const [quiz, setQuiz] = useState("");
  const [showModal, setShowModal] = useState(false);
  const title =
    !japanese && !datadog ? "Choose A Subject" : "Choose A Quiz Source";

  const handleGoBack = () => {
    setJapanese(false);
    setDatadog(false);
  };

  const handleDatadogGoBack = () => {
    setObservability(false);
    setContainers(false);
    setRapdev(false);
  };

  const handleJapanese = () => {
    setJapanese(true);
  };

  const handleDatadog = () => {
    setDatadog(true);
  };

  const handleMonAndObsShow = () => {
    setObservability(true);
  };

  const handleContainersShow = () => {
    setContainers(true);
  };

  const handleRapdevShow = () => {
    setRapdev(true);
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

  const handleClick = (name) => {
    setQuiz(name);
    setShowModal(true);
  };

  const chooseQuiz = (flag, name) => {
    console.log(name);
    if (flag) {
      startFlashCardQuiz(name);
    } else {
      startMultiChoiceQuiz(name);
    }
  };

  const startMultiChoiceQuiz = (name) => {
    handleLevelChoice(name);
    navigation.navigate("Multi Choice");
  };

  const startFlashCardQuiz = (name) => {
    const quizName = name + " flash cards";
    handleLevelChoice(quizName);
    handleUpdateRange([0, 0], quizName);
    navigation.navigate("Flash Cards");
  };

  useEffect(() => {}, [japanese, datadog, observability, containers]);

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
              {!containers && !observability && !rapdev && (
                <View>
                  <MenuButton
                    func={handleMonAndObsShow}
                    level="Monitoring & Observability"
                    type="main"
                  />
                  <Separator />
                </View>
              )}
              {!observability && !containers && !rapdev && (
                <View>
                  <MenuButton
                    func={handleContainersShow}
                    level="Containers"
                    type="main"
                  />
                  <Separator />
                </View>
              )}
              {!observability && !containers && !rapdev && (
                <View>
                  <MenuButton
                    func={handleRapdevShow}
                    level="RapDev"
                    type="main"
                  />
                  <Separator />
                </View>
              )}
              {observability && !containers && (
                <View>
                  <MenuButton
                    func={handleClick}
                    level="Monitoring 101"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleClick}
                    level="Monitoring 102"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleClick}
                    level="Monitoring 103"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleClick}
                    level="Datadog Tags"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleDatadogGoBack}
                    level="Back To Datadog"
                    type="main"
                    fixed={true}
                  />
                  <Separator />
                </View>
              )}
              {containers && !observability && (
                <View>
                  <MenuButton
                    func={handleClick}
                    level="Kubernetes Part 1"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleClick}
                    level="Kubernetes Part 2"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleClick}
                    level="Kubernetes Part 3"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleDatadogGoBack}
                    level="Back To Datadog"
                    type="main"
                    fixed={true}
                  />
                  <Separator />
                </View>
              )}
              {rapdev && (
                <View>
                  <MenuButton
                    func={handleClick}
                    level="RapDev Tagging Strategy"
                    type="level"
                  />
                  <Separator />
                  <MenuButton
                    func={handleDatadogGoBack}
                    level="Back To Datadog"
                    type="main"
                    fixed={true}
                  />
                  <Separator />
                </View>
              )}
              {!observability && !containers && !rapdev && (
                <View>
                  <MenuButton
                    func={handleGoBack}
                    level="Back To Main"
                    type="main"
                    fixed={true}
                  />
                  <Separator />
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </BackgroundImage>
      <StatusBar style="dark" />
      {showModal && (
        <QuizChoiceModal
          title={quiz}
          setChoice={chooseQuiz}
          modalVisible={showModal}
          setModalVisible={setShowModal}
        />
      )}
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
    marginTop: "10%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
});

export default HomeScreen;
