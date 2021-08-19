const isBalanced = (s) => {
  const closeMap = new Map();
  closeMap.set('}', '{');
  closeMap.set(']', '[');
  closeMap.set(')', '(');
  const balance = [];

  for (let i = 0; i < s.length; i++) {
    const isClosing = closeMap.get(s[i]);
    if (isClosing === undefined) {
      balance.push(s[i]);
    } else {
      const look = balance.pop();
      if (look !== isClosing) {
        return 'NO';
      }
    }
  }
  return balance.length === 0 ? 'YES' : 'NO';
}

let s = '{[()]}';
let expected = 'YES';
console.log(s, expected, isBalanced(s));
s = '{[(])}';
expected = 'NO';
console.log(s, expected, isBalanced(s));
s = '{{[[(())]]}}';
expected = 'YES';
console.log(s, expected, isBalanced(s));
s = '{{([])}}';
expected = 'YES';
console.log(s, expected, isBalanced(s));
s = '{{)[](}}';
expected = 'NO';
console.log(s, expected, isBalanced(s));
s = '{(([])[])[]}';
expected = 'YES';
console.log(s, expected, isBalanced(s));
s = '{(([])[])[]]}';
expected = 'NO';
console.log(s, expected, isBalanced(s));
s = '{(([])[])[]}[]';
expected = 'YES';
console.log(s, expected, isBalanced(s));
