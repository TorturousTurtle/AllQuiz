import React, { useEffect, useState } from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  useIsFocused
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./screens/HomeScreen";
import ScoreScreen from "./screens/ScoreScreen";
import JLPTScreen from "./screens/JLPTScreen.js";
import QuizScreen from "./screens/QuizScreen";
import DisplayCard from "./screens/DisplayCard";
import GenkiScreen from "./screens/GenkiScreen.js";
import ConjugateScreen from "./screens/ConjugateScreen";
import PhrasesScreen from "./screens/PhrasesScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { masterVocabScores } from "./assets/MasterVocabScores.js";

import { getLeastPracticed } from "./utilities/arrGenerationFuncs";

const HomeStack = createNativeStackNavigator();
const ScoreStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
  const [questionRange, setQuestionRange] = useState([]);
  const [quizSize, setQuizSize] = useState(50);
  const [currArr, setCurrArr] = useState("");
  const [level, setLevel] = useState("");
  const [screenTitle, setScreenTitle] = useState("");
  const [practiceArr, setPracticeArr] = useState([]);
  const [randomArr, setRandomArr] = useState([]);
  const [scores, setScores] = useState([]);
  const [masterListObj, setMasterListObj] = useState({});
  const [flag, setFlag] = useState(true);
  const [dailyAttempts, setDailyAttempts] = useState({});
  const [qFirst, setQFirst] = useState(true);
  const isFocused = useIsFocused();

  const handleUpdateRange = (range, arr) => {
    setQuestionRange(range);
    setCurrArr(arr);
    getData();
  };

  const handleLevelChoice = (choice) => {
    let screen = "";
    if (choice[0] === "g") {
      screen = "Chapter " + choice.slice(-1);
    } else {
      screen = choice.toUpperCase() + " Vocabulary";
    }
    if (choice[0] === "a") {
      setQFirst(false);
    } else {
      setQFirst(true);
    }
    setLevel(choice);
    setScreenTitle(screen);
  };

  const handleResetPracticeArr = () => {
    setPracticeArr([]);
    getData();
  };

  const handleUpdatePracticeArr = () => {
    let arr = scores.slice(0, quizSize);
    setPracticeArr(arr);
  };

  const handleUpdateRandomArr = () => {
    let allArrTemp = shuffleArr(randomArr);
    setPracticeArr(allArrTemp.slice(0, quizSize));
    getData();
  };

  const handleLeastPracticedArr = (list) => {
    let arr = getLeastPracticed(list, masterListObj, quizSize);
    setPracticeArr(arr);
    getData();
  };

  const shuffleArr = (o) => {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      const tries = await AsyncStorage.getItem("@tries");
      const size = await AsyncStorage.getItem("@numQuestions");
      const date = new Date();
      if (jsonValue != null) {
        let score = JSON.parse(jsonValue);
        if (
          score["acbd255a-d35f-4cd3-96cb-3ceb26c9d36f"].hasOwnProperty("type")
        ) {
          let arr = [];
          let temp = [];
          let allArr = [];
          for (const key in score) {
            if (score[key]["type"] !== "not scored") {
              let x = [key, score[key]["average"], score[key]["question"]];
              arr.push(x);
            }
          }
          arr.sort(function (a, b) {
            return a[1] - b[1];
          });
          for (const x in arr) {
            if (arr[x][1] !== 0) {
              allArr.push(arr[x][2]);
              temp.push(arr[x][2]);
            }
          }
          setMasterListObj(score);
          setRandomArr(allArr);
          setScores(temp);
        } else {
          storeScores();
        }
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
      if (size != null) {
        let num = JSON.parse(size);
        setQuizSize(num.num);
      } else {
        storeNumCards();
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const storeScores = async () => {
    try {
      const jsonValue = JSON.stringify(masterVocabScores);
      await AsyncStorage.setItem("@scores", jsonValue);
      let date = new Date();
      let obj = {
        attempts: 0,
        date: date,
        totalStudiedToday: 0,
      };
      const jsonVal = JSON.stringify(obj);
      await AsyncStorage.setItem("@tries", jsonVal);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const storeNumCards = async () => {
    try {
      let obj = {
        num: 50,
      };
      const jsonVal = JSON.stringify(obj);
      await AsyncStorage.setItem("@numQuestions", jsonVal);
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

  const getQuizSize = async () => {
    try {
      const size = await AsyncStorage.getItem("@numQuestions");
      if (size != null) {
        let num = JSON.parse(size);
        setQuizSize(num.num);
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (flag) {
      getData();
      setFlag(false);
    }
    if(isFocused) getQuizSize();
  }, [
    questionRange,
    currArr,
    level,
    screenTitle,
    practiceArr,
    scores,
    flag,
    dailyAttempts,
    quizSize,
    isFocused
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
            handleUpdateRandomArr={handleUpdateRandomArr}
            randomArr={randomArr}
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
      <HomeStack.Screen name="Verb Conjugation">
        {(props) => (
          <ConjugateScreen
            {...props}
            handleLevelChoice={handleLevelChoice}
            handleUpdatePracticeArr={handleUpdatePracticeArr}
            handleUpdateRange={handleUpdateRange}
          />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="Phrases">
        {(props) => (
          <PhrasesScreen
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
            handleLeastPracticedArr={handleLeastPracticedArr}
            listChoice={level}
            size={quizSize}
          />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen
        name="Flash Cards"
        options={{ title: "", headerBackVisible: false }}
      >
        {(props) => (
          <DisplayCard
            {...props}
            extraData={questionRange}
            qFirst={qFirst}
            currArr={currArr}
            handleResetPracticeArr={handleResetPracticeArr}
            practiceArr={practiceArr}
            quizSize={quizSize}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function ScoreStackScreen() {
  const [numAttempts, setNumAttempts] = useState(null);
  const isFocused = useIsFocused();

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
    if (isFocused) getData();
  }, [numAttempts, isFocused]);
  return (
    <ScoreStack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#114B5F" },
      }}
    >
      <ScoreStack.Screen name="Settings Screen" options={{ title: "" }}>
        {(props) => (
          <ScoreScreen
            {...props}
            numAttempts={numAttempts}
            updateDailyTries={updateDailyTries}
          />
        )}
      </ScoreStack.Screen>
    </ScoreStack.Navigator>
  );
}

function ProfileStackScreen() {
  const [scores, setScores] = useState(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@scores");
      if (jsonValue != null) {
        let score = JSON.parse(jsonValue);
        setScores(score);
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    if (scores === null) getData();
  }, [scores]);
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <ProfileStack.Screen name="Profile Screen" options={{ title: "" }}>
        {(props) => <ProfileScreen {...props} scores={scores} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Quizzes"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Quizzes") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Scores") {
              iconName = focused ? "bulb" : "bulb-outline";
            } else {
              iconName = focused ? "ios-person" : "ios-person-outline";
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
          name="Profile"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Quizzes"
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
          component={ScoreStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
