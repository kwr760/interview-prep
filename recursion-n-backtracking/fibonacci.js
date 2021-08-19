function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

let n = 5;
let expected = 5;
console.log(n, expected, fibonacci(n));

n = 3;
expected = 2;
console.log(n, expected, fibonacci(n));

n = 6;
expected = 8;
console.log(n, expected, fibonacci(n));

n = 12;
expected = 144;
console.log(n, expected, fibonacci(n));

n = 17;
expected = 1597;
console.log(n, expected, fibonacci(n));
