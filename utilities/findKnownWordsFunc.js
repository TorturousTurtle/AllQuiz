import { n5Arr } from "../assets/japaneseArrays/N5VocabArr";
import { n4Arr } from "../assets/japaneseArrays/N4VocabArr";
import { n3Arr } from "../assets/japaneseArrays/N3VocabArr";
import { n2Arr } from "../assets/japaneseArrays/N2VocabArr";
import { g1Arr } from "../assets/japaneseArrays/G1VocabArr";
import { g2Arr } from "../assets/japaneseArrays/G2VocabArr";
import { g3Arr } from "../assets/japaneseArrays/G3VocabArr";
import { g4Arr } from "../assets/japaneseArrays/G4VocabArr";
import { g5Arr } from "../assets/japaneseArrays/G5VocabArr";
import { g6Arr } from "../assets/japaneseArrays/G6VocabArr";
import { g7Arr } from "../assets/japaneseArrays/G7VocabArr";
import { g8Arr } from "../assets/japaneseArrays/G8VocabArr";
import { g9Arr } from "../assets/japaneseArrays/G9VocabArr";
import { g10Arr } from "../assets/japaneseArrays/G10VocabArr";
import { g11Arr } from "../assets/japaneseArrays/G11VocabArr";
import { g12Arr } from "../assets/japaneseArrays/G12VocabArr";
import { g13Arr } from "../assets/japaneseArrays/G13VocabArr";
import { g14Arr } from "../assets/japaneseArrays/G14VocabArr";
import { g15Arr } from "../assets/japaneseArrays/G15VocabArr";
import { g16Arr } from "../assets/japaneseArrays/G16VocabArr";
import { g17Arr } from "../assets/japaneseArrays/G17VocabArr";
import { g18Arr } from "../assets/japaneseArrays/G18VocabArr";
import { g19Arr } from "../assets/japaneseArrays/G19VocabArr";
import { g20Arr } from "../assets/japaneseArrays/G20VocabArr";
import { g21Arr } from "../assets/japaneseArrays/G21VocabArr";
import { g22Arr } from "../assets/japaneseArrays/G22VocabArr";
import { g23Arr } from "../assets/japaneseArrays/G23VocabArr";

const quizList = [
  n5Arr,
  n4Arr,
  n3Arr,
  n2Arr,
  g1Arr,
  g2Arr,
  g3Arr,
  g4Arr,
  g5Arr,
  g6Arr,
  g7Arr,
  g8Arr,
  g9Arr,
  g10Arr,
  g11Arr,
  g12Arr,
  g13Arr,
  g14Arr,
  g15Arr,
  g16Arr,
  g17Arr,
  g18Arr,
  g19Arr,
  g20Arr,
  g21Arr,
  g22Arr,
  g23Arr,
];

export const findKnownWordsFunc = (scores) => {
  let notSeen = 0;
  let total = 0;
  for (let i = 0; i < quizList.length; i++) {
    total += quizList[i].length;
    for (let j = 0; j < quizList[i].length; j++) {
      let id = quizList[i][j][0];
      let correct = scores[id].correct;
      if (correct === 0) {
        notSeen++;
      }
    }
  }
  let obj = {
    known: total - notSeen,
    total: total
  }
  return obj;
};
