const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = rotated.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[left] < rotated[mid]) {
      if (rotated[left] <= target && target < rotated[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (rotated[mid] < target && target <= rotated[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
