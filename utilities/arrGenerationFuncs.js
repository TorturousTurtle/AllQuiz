export const generateTenseQuestionArr = (currArrList, idList) => {
  let arr = [];
  let scrambledArr = shuffleQuestions(currArrList);
  for (let i = 0; i < 50; i++) {
    let cVerb = scrambledArr[i][3];
    if (cVerb.length > 11) {
      cVerb = cVerb.replace("/", "\n");
    }
    let tempQ =
      scrambledArr[i][1].length > 0
        ? scrambledArr[i][1] + "\n\n" + scrambledArr[i][2]
        : scrambledArr[i][2];
    let tempArr = [
      scrambledArr[i][0],
      tempQ,
      scrambledArr[i][2],
      cVerb + "\n\n" + scrambledArr[i][4],
    ];
    scrambledArr[i] = tempArr;
    arr[i] = scrambledArr[i];
    idList[i] = scrambledArr[i][0];
  }
  return arr;
};

export const generateGenkiQuestionArr = (currArrList, idList) => {
  let arr = [];
  for (let i = 0; i < currArrList.length; i++) {
    arr[i] = currArrList[i];
    idList[i] = currArrList[i][0];
  }
  return arr;
};

export const generateQuestionArr = (currArrList, start, end, idList) => {
  let arr = [];
  let i = 0;
  if (start === 0 && end === currArrList.length) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(currArrList[element]);
      idList.push(currArrList[element][0]);
    }
  } else if (end - start > 50) {
    let a1 = [];
    for (i = start; i < end; i++) {
      a1.push(i);
    }
    while (arr.length < 50) {
      let pos = Math.random() * a1.length;
      let element = a1.splice(pos, 1)[0];
      arr.push(currArrList[element]);
      idList.push(currArrList[element][0]);
    }
  } else {
    while (start < end) {
      arr[i] = currArrList[start];
      idList[i] = currArrList[start][0];
      start++;
      i++;
    }
  }
  return arr;
};

export const populateNextRound = (wrongAnswers) => {
  let arr = [];
  let i = 0;
  while (i < wrongAnswers.length) {
    arr[i] = wrongAnswers[i];
    i++;
  }
  wrongAnswers = [];
  return arr;
};

export const shuffleQuestions = (o) => {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};
