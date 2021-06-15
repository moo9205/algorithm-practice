let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    console.log(memo);
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};

console.log(fibonacci(4));
