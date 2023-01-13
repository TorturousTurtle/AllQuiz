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

function N2Screen({ navigation, handleUpdateRange }) {
  const [startValue, setStartValue] = useState("0");
  const [endValue, setEndValue] = useState("0");
  const arr = "n2";

  const startQuiz1 = () => {
    handleUpdateRange([0, 50], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz2 = () => {
    handleUpdateRange([50, 100], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz3 = () => {
    handleUpdateRange([100, 150], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz4 = () => {
    handleUpdateRange([150, 200], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz5 = () => {
    handleUpdateRange([200, 250], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz6 = () => {
    handleUpdateRange([250, 300], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz7 = () => {
    handleUpdateRange([300, 350], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz8 = () => {
    handleUpdateRange([350, 400], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz9 = () => {
    handleUpdateRange([400, 450], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz10 = () => {
    handleUpdateRange([450, 500], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz11 = () => {
    handleUpdateRange([500, 550], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz12 = () => {
    handleUpdateRange([550, 600], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz13 = () => {
    handleUpdateRange([600, 650], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz14 = () => {
    handleUpdateRange([650, 700], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz15 = () => {
    handleUpdateRange([700, 750], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz16 = () => {
    handleUpdateRange([750, 800], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz17 = () => {
    handleUpdateRange([800, 850], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz18 = () => {
    handleUpdateRange([850, 900], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz19 = () => {
    handleUpdateRange([900, 950], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz20 = () => {
    handleUpdateRange([950, 1000], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz21 = () => {
    handleUpdateRange([1000, 1050], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz22 = () => {
    handleUpdateRange([1050, 1100], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz23 = () => {
    handleUpdateRange([1100, 1150], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz24 = () => {
    handleUpdateRange([1150, 1200], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz25 = () => {
    handleUpdateRange([1200, 1250], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz26 = () => {
    handleUpdateRange([1250, 1300], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz27 = () => {
    handleUpdateRange([1300, 1350], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz28 = () => {
    handleUpdateRange([1350, 1400], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz29 = () => {
    handleUpdateRange([1400, 1450], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz30 = () => {
    handleUpdateRange([1450, 1500], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz31 = () => {
    handleUpdateRange([1500, 1550], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz32 = () => {
    handleUpdateRange([1550, 1600], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz33 = () => {
    handleUpdateRange([1600, 1650], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz34 = () => {
    handleUpdateRange([1650, 1700], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz35 = () => {
    handleUpdateRange([1700, 1750], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz36 = () => {
    handleUpdateRange([1750, 1800], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz37 = () => {
    handleUpdateRange([1800, 1850], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz38 = () => {
    handleUpdateRange([1850, 1900], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz39 = () => {
    handleUpdateRange([1900, 1950], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz40 = () => {
    handleUpdateRange([1950, 2000], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz41 = () => {
    handleUpdateRange([2000, 2050], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz42 = () => {
    handleUpdateRange([2050, 2100], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz43 = () => {
    handleUpdateRange([2100, 2150], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz44 = () => {
    handleUpdateRange([2150, 2200], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz45 = () => {
    handleUpdateRange([2200, 2250], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz46 = () => {
    handleUpdateRange([2250, 2300], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz47 = () => {
    handleUpdateRange([2300, 2350], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz48 = () => {
    handleUpdateRange([2350, 2400], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz49 = () => {
    handleUpdateRange([2400, 2450], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz50 = () => {
    handleUpdateRange([2450, 2500], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz51 = () => {
    handleUpdateRange([2500, 2550], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz52 = () => {
    handleUpdateRange([2550, 2600], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz53 = () => {
    handleUpdateRange([2600, 2650], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz54 = () => {
    handleUpdateRange([2650, 2700], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz55 = () => {
    handleUpdateRange([2700, 2750], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz56 = () => {
    handleUpdateRange([2750, 2800], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz57 = () => {
    handleUpdateRange([2800, 2850], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz58 = () => {
    handleUpdateRange([2850, 2900], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz59 = () => {
    handleUpdateRange([2900, 2950], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz60 = () => {
    handleUpdateRange([2950, 3000], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz61 = () => {
    handleUpdateRange([3000, 3050], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz62 = () => {
    handleUpdateRange([3050, 3100], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz63 = () => {
    handleUpdateRange([3100, 3150], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz64 = () => {
    handleUpdateRange([3150, 3200], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz65 = () => {
    handleUpdateRange([3200, 3250], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz66 = () => {
    handleUpdateRange([3250, 3300], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz67 = () => {
    handleUpdateRange([3300, 3350], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz68 = () => {
    handleUpdateRange([3350, 3400], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz69 = () => {
    handleUpdateRange([3400, 3450], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz70 = () => {
    handleUpdateRange([3450, 3500], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz71 = () => {
    handleUpdateRange([3500, 3550], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz72 = () => {
    handleUpdateRange([3550, 3600], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz73 = () => {
    handleUpdateRange([3600, 3650], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz74 = () => {
    handleUpdateRange([3650, 3700], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz75 = () => {
    handleUpdateRange([3700, 3750], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz76 = () => {
    handleUpdateRange([3750, 3800], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz77 = () => {
    handleUpdateRange([3800, 3850], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz78 = () => {
    handleUpdateRange([3850, 3900], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz79 = () => {
    handleUpdateRange([3900, 3950], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz80 = () => {
    handleUpdateRange([3950, 4000], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz81 = () => {
    handleUpdateRange([4000, 4050], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz82 = () => {
    handleUpdateRange([4050, 4100], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz83 = () => {
    handleUpdateRange([4100, 4150], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz84 = () => {
    handleUpdateRange([4150, 4200], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz85 = () => {
    handleUpdateRange([4200, 4250], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz86 = () => {
    handleUpdateRange([4250, 4300], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz87 = () => {
    handleUpdateRange([4300, 4350], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz88 = () => {
    handleUpdateRange([4350, 4400], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz89 = () => {
    handleUpdateRange([4400, 4450], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz90 = () => {
    handleUpdateRange([4450, 4500], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz91 = () => {
    handleUpdateRange([4500, 4550], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz92 = () => {
    handleUpdateRange([4550, 4600], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz93 = () => {
    handleUpdateRange([4600, 4650], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz94 = () => {
    handleUpdateRange([4650, 4700], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz95 = () => {
    handleUpdateRange([4700, 4702], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz96 = () => {
    handleUpdateRange([0, 4702], "n2");
    navigation.navigate("Flash Cards");
  };

  const startQuiz97 = () => {
    handleUpdateRange([startValue, endValue], "n2");
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
            onPress={startQuiz97}
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
                <Text style={styles.buttonText}>1851 - 1900</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz39}
              >
                <Text style={styles.buttonText}>1901 - 1950</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz40}
              >
                <Text style={styles.buttonText}>1951 - 2000</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz41}
              >
                <Text style={styles.buttonText}>2001 - 2050</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz42}
              >
                <Text style={styles.buttonText}>2051 - 2100</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz43}
              >
                <Text style={styles.buttonText}>2101 - 2150</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz44}
              >
                <Text style={styles.buttonText}>2151 - 2200</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz45}
              >
                <Text style={styles.buttonText}>2201 - 2250</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz46}
              >
                <Text style={styles.buttonText}>2251 - 2300</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz47}
              >
                <Text style={styles.buttonText}>2301 - 2350</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz48}
              >
                <Text style={styles.buttonText}>2351 - 2400</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz49}
              >
                <Text style={styles.buttonText}>2401 - 2450</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz50}
              >
                <Text style={styles.buttonText}>2451 - 2500</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz51}
              >
                <Text style={styles.buttonText}>2501 - 2550</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz52}
              >
                <Text style={styles.buttonText}>2551 - 2600</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz53}
              >
                <Text style={styles.buttonText}>2601 - 2650</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz54}
              >
                <Text style={styles.buttonText}>2651 - 2700</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz55}
              >
                <Text style={styles.buttonText}>2701 - 2750</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz56}
              >
                <Text style={styles.buttonText}>2751 - 2800</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz57}
              >
                <Text style={styles.buttonText}>2801 - 2850</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz58}
              >
                <Text style={styles.buttonText}>2851 - 2900</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz59}
              >
                <Text style={styles.buttonText}>2901 - 2950</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz60}
              >
                <Text style={styles.buttonText}>2951 - 3000</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz61}
              >
                <Text style={styles.buttonText}>3001 - 3050</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz62}
              >
                <Text style={styles.buttonText}>3051 - 3100</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz63}
              >
                <Text style={styles.buttonText}>3101 - 3150</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz64}
              >
                <Text style={styles.buttonText}>3151 - 3200</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz65}
              >
                <Text style={styles.buttonText}>3201 - 3250</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz66}
              >
                <Text style={styles.buttonText}>3251 - 3300</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz67}
              >
                <Text style={styles.buttonText}>3301 - 3350</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz68}
              >
                <Text style={styles.buttonText}>3351 - 3400</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz69}
              >
                <Text style={styles.buttonText}>3401 - 3450</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz70}
              >
                <Text style={styles.buttonText}>3451 - 3500</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz71}
              >
                <Text style={styles.buttonText}>3501 - 3550</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz72}
              >
                <Text style={styles.buttonText}>3551 - 3600</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz73}
              >
                <Text style={styles.buttonText}>3601 - 3650</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz74}
              >
                <Text style={styles.buttonText}>3651 - 3700</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz75}
              >
                <Text style={styles.buttonText}>3701 - 3750</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz76}
              >
                <Text style={styles.buttonText}>3751 - 3800</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz77}
              >
                <Text style={styles.buttonText}>3801 - 3850</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz78}
              >
                <Text style={styles.buttonText}>3851 - 3900</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz79}
              >
                <Text style={styles.buttonText}>3901 - 3950</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz80}
              >
                <Text style={styles.buttonText}>3951 - 4000</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz81}
              >
                <Text style={styles.buttonText}>4001 - 4050</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz82}
              >
                <Text style={styles.buttonText}>4051 - 4100</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz83}
              >
                <Text style={styles.buttonText}>4101 - 4150</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz84}
              >
                <Text style={styles.buttonText}>4151 - 4200</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz85}
              >
                <Text style={styles.buttonText}>4201 - 4250</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz86}
              >
                <Text style={styles.buttonText}>4251 - 4300</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz87}
              >
                <Text style={styles.buttonText}>4301 - 4350</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz88}
              >
                <Text style={styles.buttonText}>4351 - 4400</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz89}
              >
                <Text style={styles.buttonText}>4401 - 4450</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz90}
              >
                <Text style={styles.buttonText}>4451 - 4500</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz91}
              >
                <Text style={styles.buttonText}>4501 - 4550</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz92}
              >
                <Text style={styles.buttonText}>4551 - 4600</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz93}
              >
                <Text style={styles.buttonText}>4601 - 4650</Text>
              </TouchableHighlight>
              <Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz94}
              >
                <Text style={styles.buttonText}>4651 - 4700</Text>
              </TouchableHighlight>
              <Separator /><Separator />
              <TouchableHighlight
                underlayColor="#757f8a"
                style={styles.buttonContainer}
                onPress={startQuiz95}
              >
                <Text style={styles.buttonText}>4701 - 4702</Text>
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
            onPress={startQuiz96}
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

export default N2Screen;
