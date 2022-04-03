// https://practice.geeksforgeeks.org/problems/rearrange-characters4649/1/

export const solution = (str) => {
  const len = str.length;
  const problem = Math.ceil(len / 2) + 1;
  if (len === 1) {
    return 1;
  }
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const count = map.get(str[i]);
    if (count) {
      map.set(str[i], count + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  const counts = map[Symbol.iterator]();
  for (let [key, value] of counts) {
    if (value >= problem) {
      return 0;
    }
  }
  return 1;
}
