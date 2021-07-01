const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let splittedStr = Array.from(new Set(str.split("")));
  let answer = [];
  function recursion(arr, depth) {
    if (depth === splittedStr.length) {
      answer.push(arr.slice().sort().join(""));
      return;
    } else {
      arr[depth] = splittedStr[depth];
      recursion(arr, depth + 1);
      arr[depth] = undefined;
      recursion(arr, depth + 1);
    }
  }
  recursion([], 0);
  return answer.sort();
};
