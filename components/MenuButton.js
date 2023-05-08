import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

const MenuButton = ({ func, level, type }) => {
  const title =
    type === "range" ? level[0].toString() + "-" + level[1].toString() : level;
  const handlePress = () => {
    if (type === "level") {
      const choice = level.toLowerCase();
      func(choice);
    } else if (type === "range") {
      let arr = [level[0] - 1, level[1]];
      func(arr);
    } else {
      func();
    }
  };
  return (
    <TouchableHighlight
      underlayColor="#757f8a"
      style={styles.buttonContainer}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}> {title} </Text>
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

export default MenuButton;
