import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { testScores } from "./assets/testScores.js";

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import QuizScreen from "./QuizScreen";
import DisplayCard from "./DisplayCard";
import TestScreen from "./TestScreen";

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  const [questionRange, setQuestionRange] = useState([]);
  const [currArr, setCurrArr] = useState("");
  const [level, setLevel] = useState("");
  const [screenTitle, setScreenTitle] = useState("");
  const [practiceArr, setPracticeArr] = useState([]);
  const [scores, setScores] = useState([]);
  const [flag, setFlag] = useState(true);

  const handleUpdateRange = (range, arr) => {
    setQuestionRange(range);
    setCurrArr(arr);
  };

  const handleLevelChoice = (choice) => {
    screen = choice.toUpperCase() + " Vocabulary";
    setLevel(choice);
    setScreenTitle(screen);
  };

  const handleUpdatePracticeArr = (arr) => {
    setPracticeArr(arr);
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      if (jsonValue != null) {
        setScores(JSON.parse(jsonValue));
      } else {
        console.log("No scores imported");
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const storeScores = async () => {
    try {
      const jsonValue = JSON.stringify(testScores);
      await AsyncStorage.setItem("@scores", jsonValue);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if(flag){
      getData();
      setFlag(false);
    }
    if(scores.length === 0) storeScores();
  }, [questionRange, currArr, level, screenTitle, practiceArr, scores, flag]);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <HomeStack.Screen name=" ">
        {(props) => (
          <HomeScreen {...props} handleLevelChoice={handleLevelChoice} handleUpdatePracticeArr={handleUpdatePracticeArr} />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="Quiz Screen" options={{ title: screenTitle }}>
        {(props) => (
          <QuizScreen
            {...props}
            extraData={questionRange}
            handleUpdateRange={handleUpdateRange}
            listChoice={level}
          />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="Flash Cards" options={{ title: "" }}>
        {(props) => (
          <DisplayCard {...props} extraData={questionRange} currArr={currArr} practiceArr={practiceArr} />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  const [questionRange, setQuestionRange] = useState([]);
  const [currArr, setCurrArr] = useState("");

  const handleUpdateRange = (range, arr) => {
    setQuestionRange(range);
    setCurrArr(arr);
  };

  useEffect(() => {}, [questionRange, currArr]);
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
      }}
    >
      <SettingsStack.Screen name="TestScreen" options={{ title: "Test" }}>
        {(props) => (
          <TestScreen
            {...props}
            extraData={questionRange}
            handleUpdateRange={handleUpdateRange}
          />
        )}
      </SettingsStack.Screen>
      <SettingsStack.Screen name="Flash Cards" options={{ title: "" }}>
        {(props) => (
          <DisplayCard {...props} extraData={questionRange} currArr={currArr} />
        )}
      </SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => (
          {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          },
          {
            tabBarActiveTintColor: "#2076df",
            tabBarInactiveTintColor: "#45ba55",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          }
        )}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
