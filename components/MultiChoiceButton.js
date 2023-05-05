import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from "react-native";

const MultiChoiceButton = ({ onPress, title, answer }) => {
  const buttonText = title;
  const [buttonColor, setButtonColor] = useState("#2076df");
  const { height, width } = Dimensions.get('window');

  const handleClick = () => {
    if (answer === "t") {
      setButtonColor("green");
      setTimeout(() => {
        setButtonColor("#2076df");
        onPress(answer);
      }, 500);
    } else {
      onPress(answer);
    }
  };

  return (
    <TouchableHighlight
      onPress={handleClick}
      style={[styles.buttonDisplay, { backgroundColor: buttonColor, height: height * 0.10 }]}
    >
      <Text style={[styles.buttonText, { fontSize: height * 0.03 }]}>{buttonText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonDisplay: {
    width: 350,
    marginTop: "2%",
    marginBottom: "2%",
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
    padding: "2%",
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
});

export default MultiChoiceButton;
