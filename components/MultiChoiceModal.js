import React from "react";
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";

import Separator from "./Separator";

const MultiChoiceModal = ({
  updateQIterator,
  cancelButton,
  iterator,
  question,
  modalVisible
}) => {
  const answer = question[iterator][5];
  const flag = (iterator < question.length - 1) ? true : false;
  
  const { width } = Dimensions.get("window");

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={[styles.modalContainer, { width: width - 30 }]}>
          <View style={[styles.scoreContainer, { width: width - 45 }]}>
            <Text style={styles.modalText}>Answer</Text>
            <Text style={styles.scoreText}>{answer}</Text>
            <Separator />
            <View style={styles.modalButtonContainer}>
              {flag && (
                <TouchableHighlight
                  style={[styles.modalButton, styles.nextButton]}
                  onPress={updateQIterator}
                >
                  <Text style={styles.buttonText}>Next Question</Text>
                </TouchableHighlight>
              )}
              {!flag && (
                <TouchableHighlight
                  style={[styles.modalButton, styles.finishButton]}
                  onPress={cancelButton}
                >
                  <Text style={styles.buttonText}>Finish</Text>
                </TouchableHighlight>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderWidth: 5,
    borderColor: "white",
  },
  modalText: {
    fontSize: 28,
    textDecorationLine: "underline",
    color: "black",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    marginTop: 20,
  },
  scoreText: {
    fontSize: 28,
    color: "black",
    textAlign: "center",
    fontFamily: "Optima",
    marginTop: 10,
  },
  modalButtonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  modalButton: {
    width: 200,
    height: 40,
    backgroundColor: "#2076df",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 3, height: 1 },
  },
  nextButton: {
    marginBottom: 10,
  },
  finishButton: {
    backgroundColor: "#dd1c1a",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
  scoreContainer: {
    backgroundColor: "#45ba55",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default MultiChoiceModal;
