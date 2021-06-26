function solution(a, b) {
  let arr = [a, b];
  arr.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result.reduce(function (acc, cur) {
    return acc + cur;
  });
}

console.log(solution(5, 3));
