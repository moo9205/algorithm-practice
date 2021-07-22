const LSCS = function (arr) {
  let max = -100000;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > max) max = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};
