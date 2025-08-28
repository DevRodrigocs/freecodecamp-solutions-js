function sumAll([n, m]) {
  let sum = 0;
  let min = Math.min(n, m);
  let max = Math.max(n, m);

  for(let i = min; i <= max; i++) {
    sum += i
  }
  return sum;
}