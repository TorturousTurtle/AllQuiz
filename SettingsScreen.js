import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
})

export default SettingsScreen;
