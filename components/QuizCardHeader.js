import React from "react";
import { TouchableHighlight, Text, View, StyleSheet } from "react-native";

const QuizCardHeader = ({ cancelButton, qIterator, length }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={cancelButton}>
        <Text style={styles.cancelButtonText}>X</Text>
      </TouchableHighlight>
      <View style={styles.iteratorContainer}>
        <Text style={styles.interatorText}>
          {qIterator + 1}/{length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#114B5F",
  },
  cancelButtonText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 30,
    color: "#fc440f",
    textAlign: "center",
  },
  iteratorContainer: {
    width: 80,
    marginLeft: 290,
    marginTop: 5,
    backgroundColor: "#114B5F",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
  },
  interatorText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
});

export default QuizCardHeader;
