import { n5Arr } from "../assets/N5VocabArr";
import { n4Arr } from "../assets/N4VocabArr";
import { n3Arr } from "../assets/N3VocabArr";
import { n2Arr } from "../assets/N2VocabArr";
import { g1Arr } from "../assets/G1VocabArr";
import { g2Arr } from "../assets/G2VocabArr";
import { g3Arr } from "../assets/G3VocabArr";
import { g4Arr } from "../assets/G4VocabArr";
import { g5Arr } from "../assets/G5VocabArr";
import { g6Arr } from "../assets/G6VocabArr";
import { g7Arr } from "../assets/G7VocabArr";
import { g8Arr } from "../assets/G8VocabArr";
import { g9Arr } from "../assets/G9VocabArr";
import { g10Arr } from "../assets/G10VocabArr";
import { g11Arr } from "../assets/G11VocabArr";
import { g12Arr } from "../assets/G12VocabArr";
import { g13Arr } from "../assets/G13VocabArr";
import { g14Arr } from "../assets/G14VocabArr";
import { g15Arr } from "../assets/G15VocabArr";
import { g16Arr } from "../assets/G16VocabArr";
import { g17Arr } from "../assets/G17VocabArr";
import { g18Arr } from "../assets/G18VocabArr";
import { g19Arr } from "../assets/G19VocabArr";
import { g20Arr } from "../assets/G20VocabArr";
import { g21Arr } from "../assets/G21VocabArr";
import { g22Arr } from "../assets/G22VocabArr";
import { g23Arr } from "../assets/G23VocabArr";

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
