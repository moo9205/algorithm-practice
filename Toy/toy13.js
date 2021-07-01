const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left];
      arr[left] = cur;
      cur = arr[left];
      left--;
    }
  }
  return arr;
};
