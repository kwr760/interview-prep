const arrayManipulationSlow = (n, queries) => {
  const arr = Array.from({length: n},    (v, i) => 0);
  let i, start, end, inc, max = 0;
  queries.map((query) => {
    [start, end, inc] = query;
    for (i = start - 1; i < end; i++) {
      arr[i] = arr[i] + inc;
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  });
  return max;
};

const arrayManipulation = (n, queries) => {
  let max = 0;
  const arr = Array.from({length: n},    (v, i) => 0);
  let i, start, end, inc;
  queries.map((query) => {
    [start, end, inc] = query;
    arr[start - 1] += inc;
    if (end !== n) {
      arr[end] -= inc;
    }
  });
  let it = 0;
  for (i = 0; i < n; i++) {
    it += arr[i];
    if (max < it) {
      max = it;
    }
  }
  return max;
};

let size = 5;
let queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
];
console.log(arrayManipulationSlow(size, queries));
console.log(arrayManipulation(size, queries));

size = 10;
queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]
];
console.log(arrayManipulationSlow(size, queries));
console.log(arrayManipulation(size, queries));

queries = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
];
console.log(arrayManipulationSlow(size, queries));
console.log(arrayManipulation(size, queries));
