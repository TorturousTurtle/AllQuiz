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
import { presentTenseArr } from "../assets/japaneseArrays/presentTenseArr";
import { pastTenseArr } from "../assets/japaneseArrays/pastTenseArr";
import { presentTenseShortArr } from "../assets/japaneseArrays/presentTenseShortArr";
import { pastTenseShortArr } from "../assets/japaneseArrays/pastTenseShortArr";
import { pastTenseProgArr } from "../assets/japaneseArrays/pastTenseProgArr";
import { presentTenseProgArr } from "../assets/japaneseArrays/presentTenseProgArr";
import { presentTenseAdjArr } from "../assets/japaneseArrays/presentTenseAdjArr";
import { pastTenseAdjArr } from "../assets/japaneseArrays/pastTenseAdjArr";
import { imperativeArr } from "../assets/japaneseArrays/imperativeArr";
import { atHomePhrasesArr } from "../assets/japaneseArrays/atHomePhrasesArr";
import { n5VerbPhrases } from "../assets/japaneseArrays/n5VerbPhrases";
import { n4VerbPhrases } from "../assets/japaneseArrays/n4VerbPhrases";

import { monitoring101Arr } from "../assets/datadogArrays/monitoring101Arr";
import { monitoring101FlashArr } from "../assets/datadogArrays/monitoring101FlashArr";
import { monitoring102Arr } from "../assets/datadogArrays/monitoring102Arr";
import { monitoring102FlashArr } from "../assets/datadogArrays/monitoring102FlashArr";
import { monitoring103Arr } from "../assets/datadogArrays/monitoring103Arr";
import { monitoring103FlashArr } from "../assets/datadogArrays/monitoring103FlashArr";
import { datadogTagsArr } from "../assets/datadogArrays/datadogTagsArr";
import { datadogTagsFlashArr } from "../assets/datadogArrays/datadogTagsFlashArr";
import { k8spart1Arr } from "../assets/datadogArrays/k8spart1Arr";
import { k8spart1FlashArr } from "../assets/datadogArrays/k8spart1FlashArr";
import { k8spart2Arr } from "../assets/datadogArrays/k8spart2Arr";
import { k8spart2FlashArr } from "../assets/datadogArrays/k8spart2FlashArr";
import { k8spart3Arr } from "../assets/datadogArrays/k8spart3Arr";
import { k8spart3FlashArr } from "../assets/datadogArrays/k8spart3FlashArr";
import { rapdevTagsArr } from "../assets/datadogArrays/rapdevTagsArr";
import { rapdevTagsFlashArr } from "../assets/datadogArrays/rapdevTagsFlashArr";

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
    case "monitoring 101":
      console.log("hit")
      currArrList = monitoring101Arr;
      break;
    case "monitoring 101 flash cards":
      currArrList = monitoring101FlashArr;
      break;
    case "monitoring 102":
      currArrList = monitoring102Arr;
      break;
    case "monitoring 102 flash cards":
      currArrList = monitoring102FlashArr;
      break;
    case "monitoring 103":
      currArrList = monitoring103Arr;
      break;
    case "monitoring 103 flash cards":
      currArrList = monitoring103FlashArr;
      break;
    case "datadog tags":
      currArrList = datadogTagsArr;
      break;
    case "datadog tags flash cards":
      currArrList = datadogTagsFlashArr;
      break;
    case "kubernetes part 1":
      currArrList = k8spart1Arr;
      break;
    case "kubernetes part 1 flash cards":
      currArrList = k8spart1FlashArr;
      break;
    case "kubernetes part 2":
      currArrList = k8spart2Arr;
      break;
    case "kubernetes part 2 flash cards":
      currArrList = k8spart2FlashArr;
      break;
    case "kubernetes part 3":
      currArrList = k8spart3Arr;
      break;
    case "kubernetes part 3 flash cards":
      currArrList = k8spart3FlashArr;
      break;
    case "rapdev tagging strategy":
      currArrList = rapdevTagsArr;
      break;
    case "rapdev tagging strategy flash cards":
      currArrList = rapdevTagsFlashArr;
      break;
  }
  return currArrList;
};
