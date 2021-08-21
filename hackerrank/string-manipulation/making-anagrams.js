const makeAnagram = (a, b) => {
  const convertToMap = (s) => {
    const map = new Map();
    s.split('').map((e) => {
      const value = map.get(e) || 0;
      map.set(e, value + 1);
    })
    return map;
  }
  let changes = 0;
  const aMap = convertToMap(a);
  const bMap = convertToMap(b);

  aMap.forEach((v,k) => {
    const b = bMap.get(k) || 0;
    bMap.delete(k);
    changes += Math.abs(v - b);
  });
  bMap.forEach((v) => {
    changes += v;
  });
  return changes;
};

let a = 'cde';
let b = 'abc';
console.log(makeAnagram(a,b));
a = 'fcrxzwscanmligyxyvym';
b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(makeAnagram(a,b));
a = 'showman';
b = 'woman';
console.log(makeAnagram(a,b));
