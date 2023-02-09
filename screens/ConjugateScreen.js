import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import MenuButton from "../components/MenuButton";
import Separator from "../components/Separator";

const tenseArr = [
  "Present Tense",
  "Past Tense",
  "Present Tense Short Form",
  "Past Tense Short Form",
  "Present Tense Progressive",
  "Past Tense Progressive",
  "Imperative",
  "Present Tense Adjectives",
  "Past Tense Adjectives",
];

function ConjugateScreen({ navigation, handleLevelChoice, handleUpdateRange }) {
  const handleOptionPress = (choice) => {
    handleLevelChoice(choice);
    handleUpdateRange([0, 0], choice);
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    return (
      <View>
        <MenuButton func={handleOptionPress} level={item} type="level" />
        <Separator />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Conjugation </Text>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              {tenseArr.map((item, index) => renderItem(item, index))}
            </View>
          </ScrollView>
        </View>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    height: "75%",
  },
  buttonsContainer: {
    marginTop: "20%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
});

export default ConjugateScreen;
