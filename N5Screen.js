import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from "react-native";

const Separator = () => <View style={styles.separator} />;

function N5Screen({ navigation, handleUpdateRange }) {

  const startQuiz1 = () => {
    handleUpdateRange([0,50]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz2 = () => {
    handleUpdateRange([50,100]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz3 = () => {
    handleUpdateRange([100,150]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz4 = () => {
    handleUpdateRange([150,200]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz5 = () => {
    handleUpdateRange([200,250]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz6 = () => {
    handleUpdateRange([250,300]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz7 = () => {
    handleUpdateRange([300,350]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz8 = () => {
    handleUpdateRange([350,400]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz9 = () => {
    handleUpdateRange([400,450]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz10 = () => {
    handleUpdateRange([450,500]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz11 = () => {
    handleUpdateRange([500,550]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz12 = () => {
    handleUpdateRange([550,600]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz13 = () => {
    handleUpdateRange([600,650]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz14 = () => {
    handleUpdateRange([650,700]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz15 = () => {
    handleUpdateRange([700,727]);
    navigation.navigate("Flash Cards");
  }

  const startQuiz16 = () => {
    handleUpdateRange([0,727]);
    navigation.navigate("Flash Cards");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/QuizAppLogoAdjusted.png")}
        style={styles.homeScreenBackground}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>
            Which would you like to practice?
          </Text>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
        <ScrollView >
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz1}
          >
            <Text style={styles.buttonText}>1 - 50</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz2}
          >
            <Text style={styles.buttonText}>51 - 100</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz3}
          >
            <Text style={styles.buttonText}>101 - 150</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz4}
          >
            <Text style={styles.buttonText}>151 - 200</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz5}
          >
            <Text style={styles.buttonText}>201 - 250</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz6}
          >
            <Text style={styles.buttonText}>251 - 300</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz7}
          >
            <Text style={styles.buttonText}>301 - 350</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz8}
          >
            <Text style={styles.buttonText}>351 - 400</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz9}
          >
            <Text style={styles.buttonText}>401 - 450</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz10}
          >
            <Text style={styles.buttonText}>451 - 500</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz11}
          >
            <Text style={styles.buttonText}>501 - 550</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz12}
          >
            <Text style={styles.buttonText}>551 - 600</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz13}
          >
            <Text style={styles.buttonText}>601 - 650</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz14}
          >
            <Text style={styles.buttonText}>651 - 700</Text>
          </TouchableHighlight>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz15}
          >
            <Text style={styles.buttonText}>701 - 727</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
        </SafeAreaView>
        <View style={styles.customerButtonContainer}>
        <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz16}
          >
            <Text style={styles.buttonText}>Random 50</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollContainer: {
      height: "60%"
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
    marginTop: 20,
    height: '80%'
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
  textHeader: {
    fontSize: 30,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default N5Screen;
