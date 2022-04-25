//

export const solution = (arr, N, P) => {
  let map = new Map();
  const addToMap = (val) => {
    if (map.get(val) === undefined) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1)
    }
  };
  const getFromMap = (val) => {
    if (map.get(val) === undefined) {
      return 0;
    } else {
      const count = map.get(val);
      map.delete(val);
      return count;
    }
  }
  for (let i = 0; i < N; i++) {
    const val = arr[i];
    arr[i] = 0;
    if (val > i + 1) {
      addToMap(val);
    } else {
      if (val <= N) {
        arr[val - 1] += 1 + getFromMap(val);
      }
    }
  }
  map.forEach((v, k) => {
    if (k <= N) {
      arr[k - 1] += v;
    }
  });
}
