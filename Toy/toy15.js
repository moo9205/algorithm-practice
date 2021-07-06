const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  function isPrime(num) {
    if (num % 2 === 0) return false;
    let sqrt = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (curPwd === newPwd) {
    return 0;
  }
};
