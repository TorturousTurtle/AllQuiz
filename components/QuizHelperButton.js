import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const QuizHelperButton = ({ func, title }) => {
  const fSize = title === "Shuffle" ? 35 : 25;
  const tMargin = title === "Shuffle" ? 0 : "3%";
  const handleClick = () => {
    func();
  };
  return (
    <TouchableHighlight
      style={[styles.buttonDisplay, { marginTop: tMargin }]}
      onPress={handleClick}
    >
      <Text style={[styles.buttonText, { fontSize: fSize }]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonDisplay: {
    height: 40,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2076df",
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

export default QuizHelperButton;
