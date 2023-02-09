import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Separator;