import React from "react";
import { TouchableHighlight, Text, View, StyleSheet } from "react-native";

const QuizCard = ({
  handleFlip,
  cardFront,
  question,
  answer,
  showHint,
  hint,
  fSize
}) => {
  return (
    <TouchableHighlight onPress={handleFlip} style={styles.topContainer}>
      <View>
        {cardFront && <Text style={styles.questionText}>{question}</Text>}
        {!cardFront && (
          <Text style={[styles.questionText, { fontSize: fSize }]}>
            {answer}
          </Text>
        )}
        {showHint && cardFront && (
          <Text style={styles.questionText}>{hint}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "50%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#114B5F",
    borderBottomWidth: 2,
    borderBottomColor: "#E0FF4F",
    shadowColor: "rgba(0, 0, 0, 1)",
  },
  questionText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    fontFamily: "HiraMinProN-W3",
  },
});

export default QuizCard;
