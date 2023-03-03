import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizSizeModal = ({ modalVisible, handleCloseModal }) => {
  const [quizSize, setQuizSize] = useState(50);

  const handleUpdateQuizSize = () => {
    storeQuizSize();
    handleCloseModal();
  };

  const closeModal = () => {
    handleCloseModal();
  };

  const storeQuizSize = async () => {
    try {
      let obj = {
        num: quizSize,
      };
      const jsonVal = JSON.stringify(obj);
      await AsyncStorage.setItem("@numQuestions", jsonVal);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.modalText}>How Many Cards Per Quiz?</Text>
            <TextInput
              clearButtonMode="always"
              value={quizSize}
              onChangeText={(text) => setQuizSize(text)}
              placeholder="50"
              placeholderTextColor={"gray"}
              underlineColorAndroid="transparent"
              keyboardType="number-pad"
              style={styles.searchInput}
            />
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleUpdateQuizSize}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, { backgroundColor: "#dd1c1a" }]} onPress={closeModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalButtonContainer: {
    flexDirection: "row",
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
    width: 100,
    height: 50,
    margin: "10%",
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
    height: "35%",
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#114B5F",
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
  searchInput: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    margin: "5%",
    height: 40,
    width: 275,
    color: "black",
    fontSize: 25,
    borderRadius: 2,
  },
});

export default QuizSizeModal;
