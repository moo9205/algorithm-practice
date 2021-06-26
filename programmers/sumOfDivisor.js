function solution(left, right) {
  let result = [];
  let divisor = [];
  let num = [];
  for (let i = left; i <= right; i++) {
    num.push(i);
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor.push(j);
      }
    }
  }

  for (let i = 0; i < divisor.length; i++) {
    if (arr[i]) {
    }
  }
}

solution(13, 17);

// [1,13] [1,2,7,14]
