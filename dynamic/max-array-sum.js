import { test_case_0 } from './max-array-sum.test.js';

const addExcludes = (excludes, len, index) => {
   excludes.push(index);
   if (index > 0) {
     excludes.push(index - 1);
   }
   if ((index + 1) < len) {
     excludes.push(index + 1);
   }
   return excludes;
}

const sum = (a, b) => a + b;

const permutations = (orig, perms, perm, excludes, depth) => {
  if (depth === 0) {
    perms.push(perm);
    return;
  }
  const maxExclude = excludes.length ? Math.max(...excludes) : 0;
  for (let i = maxExclude; i < orig.length; i++) {
    if (!excludes.includes(i)) {
      const newPerm = [...perm, orig[i]];
      const newExcludes = addExcludes([...excludes], orig.length, i);
      permutations(orig, perms, newPerm, newExcludes, depth - 1);
    }
  }
}

const maxArraySum = (list) => {
  const perms = [];
  let iterations = Math.ceil(list.length / 2);
  while (iterations) {
    permutations(list, perms, [], [], iterations);
    iterations--;
  }

  const maxes = perms.map((e) => e.reduce(sum));
  const max = Math.max(...maxes);
  return max;
}

const test = (str) => {
  const arr = str.split(' ').map(arrTemp => parseInt(arrTemp, 10));

  return maxArraySum(arr);
}

let list = [1,2,3,4,5];
let expected = 9
console.log(expected, maxArraySum(list));

let str = test_case_0;
expected = 151598486
console.log(expected, test(str));
