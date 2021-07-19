const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];

  const MOVES = [RIGHT, DOWN, LEFT, UP];
  const M = matrix.length;
  const N = matrix[0].length;
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

  let current = 0;
  let row = 0,
    col = -1;
  let direction = 0;
  let result = "";
  while (current < M * N) {
    const move = MOVES[direction];
    const [rd, cd] = move;

    row = row + rd;
    col = col + cd;
    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];

      matrix[row][col] = false;
      row = row + rd;
      col = col + cd;
      current++;
    }

    row = row - rd;
    col = col - cd;

    direction = (direction + 1) % 4;
  }
  return result;
};
