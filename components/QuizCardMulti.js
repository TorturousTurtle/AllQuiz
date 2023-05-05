import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const QuizeCardMulti = ({ question, fSize }) => {
  const [questionText, setQuestionText] = useState(question);

  useEffect(() => {
    setQuestionText(question);
  }, [question]);

  const windowHeight = Dimensions.get("window").height;
  const questionTextSize = Math.round(windowHeight * 0.04);

  return (
    <View style={styles.topContainer}>
      <View>
        <Text style={[styles.questionText, { fontSize: questionTextSize }]}>
          {questionText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#114B5F",
    borderBottomWidth: 2,
    borderBottomColor: "#E0FF4F",
    shadowColor: "rgba(0, 0, 0, 1)",
  },
  questionText: {
    color: "white",
    textAlign: "center",
    fontFamily: "HiraMinProN-W3",
  },
});

export default QuizeCardMulti;
