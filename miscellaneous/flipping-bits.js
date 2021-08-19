const flippingBits = (n) => {
  let inverse = 0;
  for (let i = 31; i >= 0; i--) {
    const powerTwo = Math.pow(2, i);
    if (powerTwo <= n) {
      n -= powerTwo;
    } else {
      inverse += powerTwo;
    }
  }
  return inverse;
}

let n = 4;
let expected = 4294967291;
console.log(n, expected, flippingBits(n));

n = 123456;
expected = 4294843839;
console.log(n, expected, flippingBits(n));

n = 0;
expected = 4294967295;
console.log(n, expected, flippingBits(n));

n = 802743475;
expected = 3492223820;
console.log(n, expected, flippingBits(n));

n = 35601423;
expected = 4259365872;
console.log(n, expected, flippingBits(n));
