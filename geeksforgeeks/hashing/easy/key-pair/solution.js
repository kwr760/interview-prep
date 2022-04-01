export const solution = (arr, n, x) => {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const value = map.get(arr[i]);
    if (value) {
      map.set(arr[i], value + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  const it = map[Symbol.iterator]();
  for (const item of it) {
    const [key, value] = item;
    const needed = x - key;
    if (needed === key) {
      if (value > 1) {
        return true;
      }
    } else {
      if (map.has(needed)) {
        return true;
      }
    }
  }

  return false;
}
