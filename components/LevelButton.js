import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

const LevelButton = ({ func, level }) => {
  const handlePress = () => {
    choice = level.toLowerCase();
    func(choice);
  };
  return (
    <TouchableHighlight
      underlayColor="#757f8a"
      style={styles.buttonContainer}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}> {level} </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 20,
    height: "80%",
  },
  buttonContainer: {
    width: 300,
    height: 50,
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LevelButton;
