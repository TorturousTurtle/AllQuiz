import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import Separator from "../components/Separator";

import { findKnownWordsFunc } from "../utilities/findKnownWordsFunc";

import { StatusBar } from "expo-status-bar";

function ProfileScreen({ scores }) {
    const [known, setKnown] = useState(null);

    useEffect(() => {
        if (known === null && scores !== null) {
            let obj = findKnownWordsFunc( scores );
            obj["unknown"] = obj.total - obj.known;
            obj["completed"] = Math.floor(
                (parseFloat(obj.known) / obj.total) * 100
              ).toString()
            setKnown(obj);
        }
      }, [
        scores,
        known,
      ]);
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}> Profile </Text>
        </View>
        {known && <View>
        <Text style={styles.notSeenText}>
              Total Words Learned: {known.known}
            </Text>
            <Separator />
            <Text style={styles.notSeenText}>
              Kanji/Kana Not Seen Yet: {known.unknown}/
              {known.total}
            </Text>
            <Separator />
            <Text style={styles.notSeenText}>
              Percentage Completed: {known.completed}%
            </Text>
          </View>}
      </BackgroundImage>
      <StatusBar style="dark" />
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
    marginTop: "20%",
  },
  textHeader: {
    fontSize: 40,
    color: "black",
    fontFamily: "Optima",
  },
  notSeenText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default ProfileScreen;
