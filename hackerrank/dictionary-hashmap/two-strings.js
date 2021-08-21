const twoStrings = (s1, s2) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], true);
  }
  for (let i = 0; i < s2.length; i++) {
    const found = map.get(s2[i]) || false;
    if (found) {
      return 'YES';
    }
  }
  return 'NO';
};

let s1 = 'and';
let s2 = 'art';
let expected = 'YES';
console.log(s1, s2, expected, twoStrings(s1, s2));
s1 = 'be';
s2 = 'cat';
expected = 'NO';
console.log(s1, s2, expected, twoStrings(s1, s2));
s1 = 'hello';
s2 = 'world';
expected = 'YES';
console.log(s1, s2, expected, twoStrings(s1, s2));
s1 = 'hi';
s2 = 'world';
expected = 'NO';
console.log(s1, s2, expected, twoStrings(s1, s2));
