const alternatingCharacters = (s) => {
  let removals = 0;
  let currentChar = '';

  const strArray = s.split('');
  strArray.map((c) => {
    if (currentChar !== c) {
      currentChar = c;
    } else {
      removals++;
    }
  });
  return removals;
}

let s = 'AAAA';
console.log(alternatingCharacters(s));
s = 'BBBBB';
console.log(alternatingCharacters(s));
s = 'ABABABAB';
console.log(alternatingCharacters(s));
s = 'BABABA';
console.log(alternatingCharacters(s));
s = 'AAABBB';
console.log(alternatingCharacters(s));
