function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      result = result - i;
    } else {
      result = result + i;
    }
  }
  return result;
}

solution(13, 17);

// [1,13] [1,2,7,14]
