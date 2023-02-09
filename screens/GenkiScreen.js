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

const levelArr = [
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "G9",
  "G10",
  "G11",
  "G12",
  "G13",
  "G14",
  "G15",
  "G16",
  "G17",
  "G18",
  "G19",
  "G20",
  "G21",
  "G22",
  "G23",
  "G24",
];

function GenkiScreen({ navigation, handleLevelChoice, handleUpdateRange }) {
  const handleOptionPress = (choice) => {
    const x = +choice.slice(-1);
    const chapter = levelArr[x - 1];
    handleLevelChoice(chapter.toLowerCase());
    handleUpdateRange([0, 0], chapter.toLowerCase());
    navigation.navigate("Flash Cards");
  };

  const renderItem = (item, index) => {
    const chapter = "Chapter " + (index + 1);
    return (
      <View>
        <MenuButton func={handleOptionPress} level={chapter} type="level" />
        <Separator />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundImage
      >
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Chapter </Text>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              {levelArr.map((item, index) => renderItem(item, index))}
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
    marginTop: 20,
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
});

export default GenkiScreen;
