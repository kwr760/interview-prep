const commonChild = (s1, s2) => {
  const getPositionMap = (s) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
      const positions = map.get(s[i]) || [];
      positions.push(i);
      map.set(s[i], positions);
    }
    return map;
  };
  let maxDistance = 0;
  const str2Positions = getPositionMap(s2);
  for (let i = 0; i < s1.length; i++) {
    let distance = 0;
    let pos2 = -1;
    let str = '';
    for (let j = i; j < s1.length; j++) {
      const positions = str2Positions.get(s1[j]) || [];
      const next = positions.find(e => e > pos2);
      if (next !== undefined) {
        distance++;
        pos2 = next;
        str += s1[j];
      }
    }
    console.log(i, distance, str);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
  return maxDistance;
}

// https://en.wikipedia.org/wiki/Longest_common_subsequence_problem

let s1 = 'ABCD';
let s2 = 'ABDC';
let expected = 3;
console.log(s1, s2, expected, commonChild(s1, s2));

s1 = 'HARRY';
s2 = 'SALLY';
expected = 2;
console.log(s1, s2, expected, commonChild(s1, s2));

s1 = 'AA';
s2 = 'BB';
expected = 0;
console.log(s1, s2, expected, commonChild(s1, s2));

s1 = 'SHINCHAN';
s2 = 'NOHARAAA';
expected = 3;
console.log(s1, s2, expected, commonChild(s1, s2));

s1 = 'ABCDEF';
s2 = 'FBDAMN';
expected = 2;
console.log(s1, s2, expected, commonChild(s1, s2));

s1 = 'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS';
s2 = 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC';
expected = 15;
console.log(s1, s2, expected, commonChild(s1, s2));
