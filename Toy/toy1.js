function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  const used = [];
  let res = 0;
  for (let i = 0; i < N; i++) used.push(0); // [0, 0, 0]
  const fac = (n) => {
    let f = 1;
    for (let i = n; i > 0; i--) f *= i;
    return f;
  };
  for (let j = 0; j < K.length; j++) {
    const n = K[j];
    used[n - 1] = 1;
    const p = used.slice(0, n);
    const len = p.filter((i) => i === 0).length;
    res += len * fac(N - j - 1);
  }
  return res;
}
