import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateScoreList = (scores, question, pointType) => {
  let x = JSON.parse(JSON.stringify(scores));
  let n = pointType === "correct" ? [1, 0] : [0, 1];
  let obj = {
    correct: n[0],
    wrong: n[1],
    average: 0,
    question: [question[0], question[1], question[2], question[3]],
  };
  x[question[0]] = obj;
  let score = JSON.parse(JSON.stringify(x));
  return score;
};

export const getScores = async () => {
  let scores = {};
  try {
    const jsonValue = await AsyncStorage.getItem("@scores");
    if (jsonValue != null) {
      scores = JSON.parse(jsonValue);
      return scores;
    } else {
      console.log("No scores imported");
      return null;
    }
  } catch (e) {
    console.log("Error: " + e);
    return null;
  }
};

export const getAttempts = async () => {
  let attempts = {};
  try {
    const jsonValue = await AsyncStorage.getItem("@tries");
    if (jsonValue != null) {
      attempts = JSON.parse(jsonValue);
      return attempts;
    } else {
      console.log("No attempts imported");
      return null;
    }
  } catch (e) {
    console.log("Error: " + e);
    return null;
  }
};
