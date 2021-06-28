function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !isNaN(s);
  }
  return false;
}

console.log(solution("a234"));
