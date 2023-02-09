import React from "react";
import { TouchableHighlight, Text, View, StyleSheet } from "react-native";

const QuizRWButton = ({ func, title }) => {
  const color = title === "Correct" ? "#2076df" : "#dd1c1a";
  const handleClick = () => {
    func();
  };
  return (
    <TouchableHighlight
      style={[styles.buttonDisplay, { backgroundColor: color }]}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonDisplay: {
    width: 150,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
});

export default QuizRWButton;
