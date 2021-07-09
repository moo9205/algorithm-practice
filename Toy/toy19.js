const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";

  for (let i = 0; i <= str.length / 2; i++) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);

    if (prefix === suffix) {
      result = prefix;
    }
  }

  return result.length;
};
