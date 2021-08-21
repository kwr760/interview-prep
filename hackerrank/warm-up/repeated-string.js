const countOfChar = (str, ch) => {
  const strArray = str.split('');
  const chArray = strArray.filter(s => s === ch)
  return chArray.length;
}

const repeatedString = (str, distance) => {
  const strACount = countOfChar(str, 'a');
  const numberOfOccurrence = Math.floor(distance / str.length);
  const reminder = distance % str.length;
  const reminderACount = countOfChar(str.slice(0, reminder), 'a');
  return strACount * numberOfOccurrence + reminderACount;

};

const tests = [
  ['aba', 10],
  ['abcac', 12],
  ['a', 1000000]
]

tests.map(test => {
  console.log(test[0], test[1], repeatedString(test[0], test[1]));
})
