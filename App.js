import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons/Ionicons';

import HomeScreen from './HomeScreen'
import SettingsScreen from "./SettingsScreen";
import N5Screen from './N5Screen'
import DisplayCard from "./DisplayCard";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  const [questionRange, setQuetionRange] = useState([]);

  const handleUpdateRange = (range) => {
    setQuetionRange(range);
  };

  useEffect(() => {
    
  }, [questionRange]);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },
      }}
    >
      <HomeStack.Screen name=" " component={HomeScreen} />
      <HomeStack.Screen name="N5 Vocabulary" options={{ title: "" }}>
          {(props) => (
            <N5Screen
              {...props}
              extraData={questionRange}
              handleUpdateRange={handleUpdateRange}
            />
          )}
        </HomeStack.Screen>
      <HomeStack.Screen name="Flash Cards" options={{ title: "" }}>
          {(props) => (
            <DisplayCard
              {...props}
              extraData={questionRange}
            />
          )}
        </HomeStack.Screen>
    </HomeStack.Navigator>
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

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        },
        {
          "tabBarActiveTintColor": "#2076df",
          "tabBarInactiveTintColor": "#45ba55",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }
        )}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          initialParams={{ testString: "testString" }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
