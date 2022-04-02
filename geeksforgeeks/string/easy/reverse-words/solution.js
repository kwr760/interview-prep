// https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1

export const solution = (S) => {
  const reverseWord = (word) => {
    return (word === '') ? '' : reverseWord(word.substr(1)) + word.charAt(0);
  }
  let reverse = '';
  let word = '';
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === '.') {
      const reversed = reverseWord(word);
      if (reverse.length) {
        reverse += '.' + reversed;
      } else {
        reverse += reversed;
      }
      word = '';
    } else if (i === 0) {
      word += S[i];
      const reversed = reverseWord(word);
      if (reverse.length) {
        reverse += '.' + reversed;
      } else {
        reverse += reversed;
      }
    } else {
      word += S[i];
    }
  }
  return reverse;
}
