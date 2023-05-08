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

const QuizChoiceModal = ({ title, modalVisible, setModalVisible, setChoice }) => {
  const { width } = Dimensions.get("window");

  const handleMultiClick = () => {
    setModalVisible(false);
    setChoice(false, title);
  };

  const handleFlashClick = () => {
    setModalVisible(false);
    setChoice(true, title);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={[styles.modalContainer, { width: width - 30 }]}>
          <View style={[styles.scoreContainer, { width: width - 45 }]}>
            <Text style={styles.modalText}>
              Multiple Choice or Flash Cards?
            </Text>
            <Separator />
            <View style={styles.modalButtonContainer}>
              <TouchableHighlight
                style={[styles.modalButton, styles.quizButton]}
                onPress={handleMultiClick}
              >
                <Text style={styles.buttonText}>Multiple Choice</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={[styles.modalButton, styles.quizButton]}
                onPress={handleFlashClick}
              >
                <Text style={styles.buttonText}>Flash Cards</Text>
              </TouchableHighlight>
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
    height: "25%",
    padding: 5,
    borderWidth: 5,
    borderColor: "white",
  },
  scoreContainer: {
    backgroundColor: "#45ba55",
    borderRadius: 5,
    alignItems: "center",
    height: "99%",
    justifyContent: "space-evenly",
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
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  modalButton: {
    width: "50%",
    height: 50,
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
    marginHorizontal: 10,
  },
  quizButton: {
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold"
  },
});

export default QuizChoiceModal;
