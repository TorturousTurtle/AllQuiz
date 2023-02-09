import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/QuizAppLogoAdjusted.png")}
      style={styles.homeScreenBackground}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeScreenBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default BackgroundImage;
