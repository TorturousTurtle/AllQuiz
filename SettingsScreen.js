import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

import { masterVocabScores } from "./assets/MasterVocabScores";

function SettingsScreen({ navigation }) {
  const handlePress = () => {
    let arr = Object.keys(masterVocabScores);
    console.log(arr.length)
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
      underlayColor="#757f8a"
      style={styles.buttonContainer}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}> Press Me</Text>
    </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
})

export default SettingsScreen;
