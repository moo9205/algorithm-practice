function solution(s) {
  let arr = s.split("");
  if (arr.length !== 4 && arr.length !== 6) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(Number(arr[i]))) {
      return false;
    }
  }
  return true;
}
