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
import { presentTenseArr } from "../assets/presentTenseArr";
import { pastTenseArr } from "../assets/pastTenseArr";
import { presentTenseShortArr } from "../assets/presentTenseShortArr";
import { pastTenseShortArr } from "../assets/pastTenseShortArr";
import { pastTenseProgArr } from "../assets/pastTenseProgArr";
import { presentTenseProgArr } from "../assets/presentTenseProgArr";
import { presentTenseAdjArr } from "../assets/presentTenseAdjArr";
import { pastTenseAdjArr } from "../assets/pastTenseAdjArr";
import { imperativeArr } from "../assets/imperativeArr";
import { atHomePhrasesArr } from "../assets/atHomePhrasesArr";
import { n5VerbPhrases } from "../assets/n5VerbPhrases";
import { n4VerbPhrases } from "../assets/n4VerbPhrases";

import { monitoring101Arr } from "../assets/monitoring101Arr";
import { monitoring102Arr } from "../assets/monitoring102Arr";
import { monitoring103Arr } from "../assets/monitoring103Arr";
import { k8spart1Arr } from "../assets/k8spart1Arr";
import { k8spart2Arr } from "../assets/k8spart2Arr";
import { k8spart3Arr } from "../assets/k8spart3Arr";

export const arrFunctionPicker = (currArr) => {
  let currArrList = [];
  switch (currArr) {
    case "n5":
      currArrList = n5Arr;
      break;
    case "n4":
      currArrList = n4Arr;
      break;
    case "n3":
      currArrList = n3Arr;
      break;
    case "n2":
      currArrList = n2Arr;
      break;
    case "g1":
      currArrList = g1Arr;
      break;
    case "g2":
      currArrList = g2Arr;
      break;
    case "g3":
      currArrList = g3Arr;
      break;
    case "g4":
      currArrList = g4Arr;
      break;
    case "g5":
      currArrList = g5Arr;
      break;
    case "g6":
      currArrList = g6Arr;
      break;
    case "g7":
      currArrList = g7Arr;
      break;
    case "g8":
      currArrList = g8Arr;
      break;
    case "g9":
      currArrList = g9Arr;
      break;
    case "g10":
      currArrList = g10Arr;
      break;
    case "g11":
      currArrList = g11Arr;
      break;
    case "g12":
      currArrList = g12Arr;
      break;
    case "g13":
      currArrList = g13Arr;
      break;
    case "g14":
      currArrList = g14Arr;
      break;
    case "g15":
      currArrList = g15Arr;
      break;
    case "g16":
      currArrList = g16Arr;
      break;
    case "g17":
      currArrList = g17Arr;
      break;
    case "g18":
      currArrList = g18Arr;
      break;
    case "g19":
      currArrList = g19Arr;
      break;
    case "g20":
      currArrList = g20Arr;
      break;
    case "g21":
      currArrList = g21Arr;
      break;
    case "g22":
      currArrList = g22Arr;
      break;
    case "g23":
      currArrList = g23Arr;
      break;
    case "present tense":
      currArrList = presentTenseArr;
      break;
    case "past tense":
      currArrList = pastTenseArr;
      break;
    case "present tense progressive":
      currArrList = presentTenseProgArr;
      break;
    case "past tense progressive":
      currArrList = pastTenseProgArr;
      break;
    case "present tense adjectives":
      currArrList = presentTenseAdjArr;
      break;
    case "past tense adjectives":
      currArrList = pastTenseAdjArr;
      break;
    case "imperative":
      currArrList = imperativeArr;
      break;
    case "present tense short form":
      currArrList = presentTenseShortArr;
      break;
    case "past tense short form":
      currArrList = pastTenseShortArr;
      break;
    case "around the house":
      currArrList = atHomePhrasesArr;
      break;
    case "an5 verb phrases":
      currArrList = n5VerbPhrases;
      break;
    case "an4 verb phrases":
      currArrList = n4VerbPhrases;
      break;
    case "Monitoring 101":
      currArrList = monitoring101Arr;
      break;
    case "Monitoring 102":
      currArrList = monitoring102Arr;
      break;
    case "Monitoring 103":
      currArrList = monitoring103Arr;
      break;
    case "mk8s1":
    currArrList = k8spart1Arr;
    break;
    case "mk8s2":
    currArrList = k8spart2Arr;
    break;
    case "mk8s3":
    currArrList = k8spart3Arr;
    break;
  }
  return currArrList;
};
