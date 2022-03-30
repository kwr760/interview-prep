export const solution = (arr, len) => {
  const pos = [];
  const neg = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else {
      pos.push(arr[i]);
    }
  }
  for (let i = 0; i < len; i++) {
    if (i % 2 === 1) {
      if (neg.length) {
        arr[i] = neg.shift();
      } else {
        arr[i] = pos.shift();
      }
    } else {
      if (pos.length) {
        arr[i] = pos.shift();
      } else {
        arr[i] = neg.shift();
      }
    }
  }
  return arr;
}

