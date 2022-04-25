// https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1

export const solution = (arr, n) => {
  if (n === 0) {
    return -1;
  }
  const len = arr[0].length;
  let prefix = '';
  let done = false;
  for (let i = 0; i < len && !done; i++) {
    const char = arr[0][i];
    for (let str of arr) {
      if (str.length < i) {
        done = true;
      } else {
        if (str[i] !== char) {
          done = true
        }
      }
    }
    if (!done) {
      prefix += char;
    }
  }
  if (prefix.length === 0) {
    return -1;
  }
  return prefix;
}
