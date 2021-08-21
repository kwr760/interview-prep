const substrCountSlow = (n, s) => {
  const isSpecial = (s) => {
    const c = s[0];
    const len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (s[i] !== s[len - i - 1] || s[i] !== c) {
        return false;
      }
    }
    return true;
  };
  let count = s.length;
  for (let i = 2; i <= s.length ; i++) {
    for (let j = 0; j <= (s.length - i); j++) {
      const sub = s.substr(j, i);
      if (isSpecial(sub)) {
        count++;
      }
    }
  }
  return count;
};

const substrCount = (n, s) => {
  const combinations = (n) => {
    if (n === 1) {
      return 1;
    }
    return n + combinations(n - 1);
  }
  const tuples = [];
  let cur = s[0], count = 1;
  for (let i = 1; i < s.length; i++) {
    if (cur === s[i]) {
      count++;
    } else {
      tuples.push({
        name: cur,
        count
      });
      cur = s[i];
      count = 1;
    }
  }
  tuples.push({
    name: cur,
    count
  });
  let specials = 0;
  for (let i = 0; i < tuples.length; i++) {
    const tuple = tuples[i];
    specials += combinations(tuple.count);
  }
  for (let i = 1; i < tuples.length - 1; i++) {
    const tuple = tuples[i];
    if (tuple.count === 1) {
      const before = tuples[i-1];
      const after = tuples[i+1];
      if (before.name === after.name) {
        specials += Math.min(before.count, after.count);
      }
    }
  }
  return specials;
};

let s = 'mnonopoo';
console.log(substrCountSlow(0, s));
console.log(substrCount(0, s));
// 12
s = 'asasd';
console.log(substrCountSlow(0, s));
console.log(substrCount(0, s));
// 7
s = 'abcbaba';
console.log(substrCountSlow(0, s));
console.log(substrCount(0, s));
// 10
s = 'aaaa';
console.log(substrCountSlow(0, s));
console.log(substrCount(0, s));
// 10
