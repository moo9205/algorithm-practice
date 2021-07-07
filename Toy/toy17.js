const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  // Write your code here
  const arr = str.split("");

  let stack = [];
  for (let item of arr) {
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (item === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (item === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (item === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  }

  return stack.length > 0 ? false : true;
};
