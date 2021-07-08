const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let cur = 0,
    left = 0,
    right = 0;
  let target;
  while (cur < k) {
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } else {
      target = arr2[right];
      right++;
    }
    cur++;
  }
  return target;
};
