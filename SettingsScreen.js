import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { masterVocabScores } from "./assets/MasterVocabScores";

function SettingsScreen({ navigation }) {
  const [scores, setScores] = useState([]);
  const [dailyAttempts, setDailyAttempts] = useState({});
  const handlePress = () => {
    let n = 0;
    for(const obj in scores){
      if (n > 7001) console.log(scores[obj])
      if(scores[obj]["average"] !== "0"){
        // console.log(`${n} ${scores[obj]}`)
        n++;
      }
    }
  }

  const storeAttempts = async (obj) => {
    try {
      const jsonValue = JSON.stringify(obj);
      await AsyncStorage.setItem("@tries", jsonValue);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      const tries = await AsyncStorage.getItem("@tries")
      const date = new Date();
      if (jsonValue != null) {
        setScores(JSON.parse(jsonValue));
      } else {
        console.log("No scores imported");
      }
      if(tries != null){
        let x = JSON.parse(tries);
        let oldDate = new Date(Date.parse(x.date));
        let day1 = oldDate.getDay();
        let month1 = oldDate.getMonth();
        if(day1 < date.getDay() && month1 <= date.getMonth()){
          let obj = {
            "attempts": 0,
            "date": date
          } 
          setDailyAttempts(obj);
        } else {
          setDailyAttempts(x);
        }
      } else {
        let obj = {
          "attempts": 0,
          "date": date
        } 
        
        setDailyAttempts(obj);
        storeAttempts(obj);
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if(!dailyAttempts.hasOwnProperty('date')) getData();
  }, [scores, dailyAttempts]);

  return (
    <View style={styles.container}>
      <Text>Quizzes Taken Today: {dailyAttempts.attempts}</Text>
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
