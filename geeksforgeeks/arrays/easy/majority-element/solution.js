const withoutConstraints = (a, size) => {
  const map = new Map();
  a.forEach((e) => {
    const mapped = map.get(e);
    if (mapped) {
      map.set(e, mapped + 1);
    } else {
      map.set(e, 1);
    }
  });

  const half = Math.floor(size/2);
  const iter = map[Symbol.iterator]();
  for (const item of iter) {
    const [key, value] = item;
    if (value > half) {
      return key;
    }
  }
  return -1;
};

const correct = (a, size) => {
  const half = Math.floor(size/2);
  let candidate = 0;
  for (let i = 0; i < size; i++) {

  }
  return -1;
};

export const solution = (a, size) => {
  // return withoutConstraints(a, size);
  return correct(a, size);
}
