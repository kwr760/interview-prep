export const solution = (tree, n, k) => {
  let low = 1;
  let high = Math.max(...tree);

  while (low < high) {
    const h = low + Math.floor((high - low)/2);
    let collected = 0;
    for (let i = 0; i < n; i++) {
      if (tree[i] > h) {
        collected += tree[i] - h;
      }
    }
    if (k === collected) {
      return h;
    } else if (k < collected) {
      low = (low === h) ? h + 1 : h;
    } else {
      high = (high === h) ? h - 1 : h;
    }
  }

  return -1;
}
