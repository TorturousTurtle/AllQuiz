import React from "react";
import { Text, View, StyleSheet } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import MenuButton from "../components/MenuButton";
import Separator from "../components/Separator";

const levelArr = ["N5", "N4", "N3", "N2"];

function JLPTScreen({ navigation, handleLevelChoice }) {
  const handleOptionPress = (choice) => {
    handleLevelChoice(choice);
    navigation.navigate("Quiz Screen");
  };

  const renderItem = (item, index) => {
    return (
      <View>
        <MenuButton
          func={handleOptionPress}
          level={item}
          type="level"
          id={index.toString()}
        />
        <Separator />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Choose A Level </Text>
        </View>
        <View style={styles.buttonsContainer}>
          {levelArr.map((item, index) => renderItem(item, index))}
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
  buttonsContainer: {
    marginTop: "15%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
});

export default JLPTScreen;
