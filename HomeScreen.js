import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

import { StatusBar } from 'expo-status-bar';

const Separator = () => <View style={styles.separator} />;

function HomeScreen({
  navigation,
}) {
  const handleJLPTNav = () => {
    navigation.navigate("JLPT Levels");
  };

  const handleGenkiNav = () => {
    navigation.navigate("Genki Chapters");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/QuizAppLogoAdjusted.png")}
        style={styles.homeScreenBackground}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Quiz Source </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={handleJLPTNav}
          >
            <Text style={styles.buttonText}>
              JLPT
            </Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={handleGenkiNav}
          >
            <Text style={styles.buttonText}>
              Genki
            </Text>
          </TouchableHighlight>
          <Separator />
        </View>
      </ImageBackground>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  homeScreenBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: "20%",
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
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 7, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
