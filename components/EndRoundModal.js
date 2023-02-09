import React from "react";
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Modal,
} from "react-native";

import Separator from "./Separator";

const EndRoundModal = ({
  modalVisible,
  round,
  correct,
  wrong,
  handleNextRound,
  goHome,
}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.modalText}>Round: {round}</Text>
            <Text style={styles.modalText}>Your Score</Text>
            <Text style={styles.scoreText}>Correct: {correct}</Text>
            <Text style={styles.scoreText}>Incorrect: {wrong}</Text>
            <View style={styles.listContainer}>
              <View style={styles.modalButtonContainer}>
                <Separator />
                {wrong > 0 && (
                  <TouchableHighlight
                    style={styles.modalButton}
                    onPress={handleNextRound}
                  >
                    <Text style={styles.buttonText}>Next Round</Text>
                  </TouchableHighlight>
                )}
                <TouchableHighlight
                  style={[styles.modalButton, { backgroundColor: "#dd1c1a" }]}
                  onPress={goHome}
                >
                  <Text style={styles.buttonText}>Quit</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  modalButtonContainer: {
    marginTop: 1,
  },
  modalText: {
    fontSize: 45,
    textDecorationLine: "underline",
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    marginTop: 20,
  },
  scoreText: {
    fontSize: 45,
    color: "black",
    textAlign: "center",
    fontFamily: "Optima",
    marginTop: 10,
  },
  modalButton: {
    width: 250,
    height: 40,
    marginTop: "10%",
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
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
  },
  modalContainer: {
    height: "50%",
    width: "90%",
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%",
    marginLeft: "5%",
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  scoreContainer: {
    height: "95%",
    width: "95%",
    backgroundColor: "#45ba55",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default EndRoundModal;
