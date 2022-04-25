// https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1

export const solution = (arr, n) => {
  let zeroCount = 0;
  let zeroIndex;
  let product = 1;
  for (let i in arr) {
    const value = arr[i];
    if (value === 0) {
      zeroCount++;
      if (zeroCount === 1) {
        zeroIndex = i;
      }
    } else {
      product *= value;
    }
  }
  const productArr = [];
  for (let i in arr) {
    if (zeroCount > 1) {
      productArr.push(0);
    } else if (zeroCount === 1 && zeroIndex !== i) {
      productArr.push(0);
    } else if (zeroCount === 1 && zeroIndex === i) {
      productArr.push(product);
    } else {
      const value = product / arr[i];
      productArr.push(value);
    }
  }
  return productArr;
}
