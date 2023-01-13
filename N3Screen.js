import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

function N3Screen({ navigation, handleUpdateRange }) {
  const [startValue, setStartValue] = useState("0");
  const [endValue, setEndValue] = useState("0");
  const arr = "n3";

  const startQuiz1 = () => {
    handleUpdateRange([0, 50], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz2 = () => {
    handleUpdateRange([50, 100], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz3 = () => {
    handleUpdateRange([100, 150], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz4 = () => {
    handleUpdateRange([150, 200], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz5 = () => {
    handleUpdateRange([200, 250], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz6 = () => {
    handleUpdateRange([250, 300], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz7 = () => {
    handleUpdateRange([300, 350], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz8 = () => {
    handleUpdateRange([350, 400], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz9 = () => {
    handleUpdateRange([400, 450], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz10 = () => {
    handleUpdateRange([450, 500], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz11 = () => {
    handleUpdateRange([500, 550], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz12 = () => {
    handleUpdateRange([550, 600], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz13 = () => {
    handleUpdateRange([600, 650], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz14 = () => {
    handleUpdateRange([650, 700], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz15 = () => {
    handleUpdateRange([700, 750], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz16 = () => {
    handleUpdateRange([750, 800], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz17 = () => {
    handleUpdateRange([800, 850], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz18 = () => {
    handleUpdateRange([850, 900], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz19 = () => {
    handleUpdateRange([900, 950], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz20 = () => {
    handleUpdateRange([950, 1000], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz21 = () => {
    handleUpdateRange([1000, 1050], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz22 = () => {
    handleUpdateRange([1050, 1100], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz23 = () => {
    handleUpdateRange([1100, 1150], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz24 = () => {
    handleUpdateRange([1150, 1200], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz25 = () => {
    handleUpdateRange([1200, 1250], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz26 = () => {
    handleUpdateRange([1250, 1300], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz27 = () => {
    handleUpdateRange([1300, 1350], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz28 = () => {
    handleUpdateRange([1350, 1400], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz29 = () => {
    handleUpdateRange([1400, 1450], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz30 = () => {
    handleUpdateRange([1450, 1500], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz31 = () => {
    handleUpdateRange([1500, 1550], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz32 = () => {
    handleUpdateRange([1550, 1600], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz33 = () => {
    handleUpdateRange([1600, 1650], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz34 = () => {
    handleUpdateRange([1650, 1700], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz35 = () => {
    handleUpdateRange([1700, 1750], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz36 = () => {
    handleUpdateRange([1750, 1800], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz37 = () => {
    handleUpdateRange([1800, 1850], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz38 = () => {
    handleUpdateRange([1850, 1893], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz39 = () => {
    handleUpdateRange([0, 1893], "n3");
    navigation.navigate("Flash Cards");
  };

  const startQuiz40 = () => {
    handleUpdateRange([startValue, endValue], "n3");
    navigation.navigate("Flash Cards");
  };

  useEffect(() => {}, [startValue, endValue]);

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
        <View style={styles.customContainer}>
          <TouchableHighlight
            underlayColor="#757f8a"
            style={[styles.buttonContainer, { width: "50%" }]}
            onPress={startQuiz40}
          >
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableHighlight>
          <Separator />
          <View style={styles.infoContainer}>
            <Text style={styles.labels}>Start</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={1}
              onPress={() => {
                // lbsBox.current.focus();
                null;
              }}
            >
              <TextInput
                placeholder={"0"}
                placeholderTextColor="white"
                onChangeText={(text) => setStartValue(text)}
                clearTextOnFocus={true}
                keyboardType="number-pad"
                value={startValue}
                underlineColorAndroid="transparent"
                ref={null}
                style={styles.inputText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.labels}>End</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={1}
              onPress={() => {
                // lbsBox.current.focus();
                null;
              }}
            >
              <TextInput
                placeholder={"0"}
                placeholderTextColor="white"
                onChangeText={(text) => setEndValue(text)}
                clearTextOnFocus={true}
                keyboardType="number-pad"
                value={endValue}
                underlineColorAndroid="transparent"
                ref={null}
                style={styles.inputText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView>
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
                <Text style={styles.buttonText}>701 - 750</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz16}
              >
                <Text style={styles.buttonText}>751 - 800</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz17}
              >
                <Text style={styles.buttonText}>801 - 850</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz18}
              >
                <Text style={styles.buttonText}>851 - 900</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz19}
              >
                <Text style={styles.buttonText}>901 - 950</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz20}
              >
                <Text style={styles.buttonText}>951 - 1000</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz21}
              >
                <Text style={styles.buttonText}>1001 - 1050</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz22}
              >
                <Text style={styles.buttonText}>1051 - 1100</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz23}
              >
                <Text style={styles.buttonText}>1101 - 1150</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz24}
              >
                <Text style={styles.buttonText}>1151 - 1200</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz25}
              >
                <Text style={styles.buttonText}>1201 - 1250</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz26}
              >
                <Text style={styles.buttonText}>1251 - 1300</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz27}
              >
                <Text style={styles.buttonText}>1301 - 1350</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz28}
              >
                <Text style={styles.buttonText}>1351 - 1400</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz29}
              >
                <Text style={styles.buttonText}>1401 - 1450</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz30}
              >
                <Text style={styles.buttonText}>1451 - 1500</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz31}
              >
                <Text style={styles.buttonText}>1501 - 1550</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz32}
              >
                <Text style={styles.buttonText}>1551 - 1600</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz33}
              >
                <Text style={styles.buttonText}>1601 - 1650</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz34}
              >
                <Text style={styles.buttonText}>1651 - 1700</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz35}
              >
                <Text style={styles.buttonText}>1701 - 1750</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz36}
              >
                <Text style={styles.buttonText}>1751 - 1800</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz37}
              >
                <Text style={styles.buttonText}>1801 - 1850</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz38}
              >
                <Text style={styles.buttonText}>1851 - 1893</Text>
              </TouchableHighlight>
              <Separator />
            </View>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.customerButtonContainer}>
          <Separator />
          <TouchableHighlight
            underlayColor="#757f8a"
            style={styles.buttonContainer}
            onPress={startQuiz39}
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
  customContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2%",
    height: "10%",
    width: "75%",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "15%",
    height: "75%",
  },
  inputContainer: {
    backgroundColor: "grey",
    width: "100%",
    borderRadius: 5,
  },
  scrollContainer: {
    height: "60%",
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
  textHeader: {
    fontSize: 30,
  },
  inputText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default N3Screen;
