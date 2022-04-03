// https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1

export const solution = (str) => {
  const map = new Map();
  map.set('}', '{');
  map.set(')', '(');
  map.set(']', '[');
  const stack = [];
  for (let i=0; i<str.length; i++) {
    const check = str[i];
    const opening = map.get(check);
    if (opening) {
      if (opening !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(check);
    }
  }
  return !stack.length;
}
