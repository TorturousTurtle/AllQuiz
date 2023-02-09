import React from "react";
import { View, StyleSheet } from "react-native";

import EndRoundModal from "./EndRoundModal";
import QuizRWButton from "./QuizRWButton";
import QuizHelperButton from "./QuizHelperButton";

const QuizCardBottom = ({
  shuffleActive,
  handleWrong,
  showHint,
  handleCorrect,
  handleShuffle,
  handleStartDef,
  questionFirst,
  cardFront,
  currArr,
  handleShowHint,
  modalVisible,
  round,
  questionList,
  wrongAnswers,
  handleNextRound,
  goHome,
}) => {
  const defButtonTitle = questionFirst
    ? "Start With Definitions"
    : "Start With Kanji/Kana";
  return (
    <View style={styles.bottomContainer}>
      <View
        style={[
          styles.buttonContainer,
          { marginTop: shuffleActive ? "10%" : "20%" },
        ]}
      >
        <QuizRWButton func={handleWrong} title="Wrong" />
        {!showHint && <QuizRWButton func={handleCorrect} title="Correct" />}
      </View>
      <View style={styles.shuffleButtonContainer}>
        {shuffleActive && !showHint && (
          <View>
            <QuizHelperButton func={handleShuffle} title="Shuffle" />
            {currArr[0] !== "p" && (
              <QuizHelperButton func={handleStartDef} title={defButtonTitle} />
            )}
          </View>
        )}
        {!showHint && cardFront && questionFirst && currArr[0] !== "p" && (
          <QuizHelperButton func={handleShowHint} title="Show Hint" />
        )}
      </View>
      <EndRoundModal
        modalVisible={modalVisible}
        round={round}
        correct={questionList.length - wrongAnswers.length}
        wrong={wrongAnswers.length}
        handleNextRound={handleNextRound}
        goHome={goHome}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    height: "50%",
    justifyContent: "flex-start",
    backgroundColor: "#95a3a4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10%",
  },
  shuffleButtonContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
});

export default QuizCardBottom;
