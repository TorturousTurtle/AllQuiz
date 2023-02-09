import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

const CustomPracticeInput = ({func, title, value }) => {

    const handleUpdateInput = (text) => {
        func(text);
    }

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.labels}>{title}</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={1}
              onPress={() => {
                null;
              }}
            >
              <TextInput
                placeholder={"0"}
                placeholderTextColor="white"
                onChangeText={(text) => handleUpdateInput(text)}
                clearTextOnFocus={true}
                keyboardType="number-pad"
                value={value}
                underlineColorAndroid="transparent"
                style={styles.inputText}
              />
            </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
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
      inputText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
      },
})

export default CustomPracticeInput;