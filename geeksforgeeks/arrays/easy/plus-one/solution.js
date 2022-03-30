export const solution = (arr, n) => {
  let carry = 1;
  for (let i = n - 1; i >= 0; i--) {
    let value = arr[i] + carry;
    if (value > 9) {
      arr[i] = 0;
      carry = 1;
    } else {
      arr[i] = value;
      carry = 0;
    }
  }
  if (carry) {
    arr.unshift(carry);
  }
  return arr;
}
