// https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string-1587115620/1

export const solution = (str) => {
  const perms = [];
  const permutations = (arr, perm = '') => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        const ch = arr[i];
        const newArray = [...arr];
        newArray.splice(i,1);
        permutations(newArray,perm + ch);
      }
    } else {
      perms.push(perm);
    }
  }
  const arr = str.split('');
  arr.sort();
  permutations(arr);
  return perms;
}
