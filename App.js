import React, { useEffect, useState } from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./HomeScreen";
import ScoreScreen from "./ScoreScreen";
import JLPTScreen from "./JLPTScreen.js";
import QuizScreen from "./QuizScreen";
import DisplayCard from "./DisplayCard";
import GenkiScreen from "./GenkiScreen.js";
import { masterVocabScores } from "./assets/MasterVocabScores.js";

import { n5Arr } from "./assets/N5VocabArr";

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
  const [dailyAttempts, setDailyAttempts] = useState({});

  const handleUpdateRange = (range, arr) => {
    setQuestionRange(range);
    setCurrArr(arr);
  };

  const handleLevelChoice = (choice) => {
    let screen = "";
    if (choice[0] === "g") {
      screen = "Chapter " + choice.slice(-1);
    } else {
      screen = choice.toUpperCase() + " Vocabulary";
    }
    setLevel(choice);
    setScreenTitle(screen);
  };

  const handleResetPracticeArr = () => {
    setPracticeArr([]);
  }

  const handleUpdatePracticeArr = () => {
    setPracticeArr(scores);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      const tries = await AsyncStorage.getItem("@tries");
      const date = new Date();
      if (jsonValue != null) {
        let score = JSON.parse(jsonValue);
        let arr = [];
        let temp = [];
        for (const key in score) {
          let x = [key, score[key]["average"], score[key]["question"]];
          arr.push(x);
        }
        arr.sort(function (a, b) {
          return a[1] - b[1];
        });
        for (const x in arr) {
          if (arr[x][1] !== 0) {
            if (temp.length < 50) temp.push(arr[x][2]);
          }
        }
        setScores(temp);
      } else {
        storeScores();
        console.log("No scores imported");
      }
      if (tries != null) {
        let x = JSON.parse(tries);
        let date = new Date();
        let oldDate = new Date(Date.parse(x.date));
        let day1 = oldDate.getDay();
        let olderDate = date > oldDate;
        if ((day1 < date.getDay() || date.getDay() - day1 < 0) && olderDate) {
          let obj = {
            attempts: 0,
            date: date,
            totalStudiedToday: 0,
          };
          setDailyAttempts(obj);
          storeAttempts(obj);
          numAttempts = 0;
        } else {
          if (!x.hasOwnProperty("totalStudiedToday")) {
            x["totalStudiedToday"] = 0;
          }
          setDailyAttempts(x);
          storeAttempts(x);
        }
      } else {
        let obj = {
          attempts: 0,
          date: date,
          totalStudiedToday: 0,
        };
        setDailyAttempts(obj);
        storeAttempts(obj);
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const storeScores = async () => {
    try {
      const jsonValue = JSON.stringify(masterVocabScores);
      await AsyncStorage.setItem("@scores", jsonValue);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const storeAttempts = async (obj) => {
    try {
      const jsonValue = JSON.stringify(obj);
      await AsyncStorage.setItem("@tries", jsonValue);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (flag) {
      getData();
      setFlag(false);
    }
  }, [
    questionRange,
    currArr,
    level,
    screenTitle,
    practiceArr,
    scores,
    flag,
    dailyAttempts,
  ]);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <HomeStack.Screen name=" ">
        {(props) => (
          <HomeScreen
            {...props}
            handleLevelChoice={handleLevelChoice}
            handleUpdatePracticeArr={handleUpdatePracticeArr}
          />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="JLPT Levels">
        {(props) => (
          <JLPTScreen
            {...props}
            handleLevelChoice={handleLevelChoice}
            handleUpdatePracticeArr={handleUpdatePracticeArr}
          />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="Genki Chapters">
        {(props) => (
          <GenkiScreen
            {...props}
            handleLevelChoice={handleLevelChoice}
            handleUpdatePracticeArr={handleUpdatePracticeArr}
            handleUpdateRange={handleUpdateRange}
          />
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
          <DisplayCard
            {...props}
            extraData={questionRange}
            currArr={currArr}
            handleResetPracticeArr={handleResetPracticeArr}
            practiceArr={practiceArr}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  const [numAttempts, setNumAttempts] = useState(null);

  const updateDailyTries = () => {
    let tries = getData();
    return tries;
  };

  const getData = async () => {
    try {
      const tries = await AsyncStorage.getItem("@tries");
      const date = new Date();
      if (tries != null) {
        let x = JSON.parse(tries);
        let oldDate = new Date(Date.parse(x.date));
        let day1 = oldDate.getDay();
        let olderDate = date > oldDate;
        if ((day1 < date.getDay() || date.getDay() - day1 < 0) && olderDate) {
          let obj = {
            attempts: 0,
            date: date,
            totalStudiedToday: 0,
          };
          setNumAttempts(obj);
          return obj;
        } else {
          if (!x.hasOwnProperty("totalStudiedToday")) {
            x["totalStudiedToday"] = 0;
          }
          setNumAttempts({
            ...numAttempts,
            attempts: x.attempts,
            date: x.date,
            totalStudiedToday: x.totalStudiedToday,
          });
          return x;
        }
      } else {
        let obj = {
          attempts: 0,
          date: date,
          totalStudiedToday: 0,
        };
        setNumAttempts(obj);
        return obj;
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (numAttempts === null) getData();
  }, [numAttempts]);
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#114B5F" },
      }}
    >
      <SettingsStack.Screen name="Settings Screen" options={{ title: "" }}>
        {(props) => (
          <ScoreScreen
            {...props}
            numAttempts={numAttempts}
            updateDailyTries={updateDailyTries}
          />
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Scores") {
              iconName = focused ? "bulb" : "bulb-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2076df",
          tabBarInactiveTintColor: "#45ba55",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? "";
              if (routeName === "Flash Cards") {
                return { display: "none" };
              }
              return;
            })(route),
          })}
        />
        <Tab.Screen
          name="Scores"
          component={SettingsStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
