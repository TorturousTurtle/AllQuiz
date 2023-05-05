import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import MultiChoiceButton from "./MultiChoiceButton";

const QuizCardBottomMulti = ({
  handleWrong,
  handleCorrect,
  currArr,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const buttonHeight = windowHeight * 0.21;
  const buttonMargin = windowHeight * 0.02;

  const shuffledArr = [...currArr];
  for (let i = 1; i <= 4; i++) {
    const j = Math.floor(Math.random() * (4 - i + 1)) + i;
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  const text1 = shuffledArr[1][0];
  const text2 = shuffledArr[2][0];
  const text3 = shuffledArr[3][0];
  const text4 = shuffledArr[4][0];
  const answer1 = shuffledArr[1][1];
  const answer2 = shuffledArr[2][1];
  const answer3 = shuffledArr[3][1];
  const answer4 = shuffledArr[4][1];

  const onPress = (answer) => {
    if(answer === "t"){
      handleCorrect();
    } else {
      handleWrong();
    }
  }

  return (
    <View style={[styles.bottomContainer, {height: windowHeight * 0.75}]}>
      <View style={styles.shuffleButtonContainer}>
        <MultiChoiceButton 
          onPress={onPress} 
          title={text1} 
          answer={answer1} 
          containerStyle={[
            styles.buttonContainer, 
            {height: buttonHeight, marginTop: windowHeight * 0.05},
            {marginBottom: buttonMargin}
          ]}
          titleStyle={{fontSize: buttonHeight * 0.35}}
        />
        <MultiChoiceButton 
          onPress={onPress} 
          title={text2} 
          answer={answer2} 
          containerStyle={[
            styles.buttonContainer, 
            {height: buttonHeight},
            {marginBottom: buttonMargin}
          ]}
          titleStyle={{fontSize: buttonHeight * 0.35}}
        />
        <MultiChoiceButton 
          onPress={onPress} 
          title={text3} 
          answer={answer3} 
          containerStyle={[
            styles.buttonContainer, 
            {height: buttonHeight},
            {marginBottom: buttonMargin}
          ]}
          titleStyle={{fontSize: buttonHeight * 0.35}}
        />
        <MultiChoiceButton 
          onPress={onPress} 
          title={text4} 
          answer={answer4} 
          containerStyle={[
            styles.buttonContainer, 
            {height: buttonHeight},
            {marginBottom: windowHeight * 0.05}
          ]}
          titleStyle={{fontSize: buttonHeight * 0.35}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: "flex-start",
    backgroundColor: "#95a3a4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "85%",
    elevation: 4,
  },
  shuffleButtonContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
});

export default QuizCardBottomMulti;
