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
    console.log(n);
    used[n - 1] = 1;
    console.log(used);
    const p = used.slice(0, n);
    console.log(p);
    const len = p.filter((i) => i === 0).length;
    console.log(len);
    res += len * fac(N - j - 1);
    console.log("-------------------");
  }
  return res;
}

console.log(orderOfPresentation(5, [1, 3, 2, 4, 5]));
