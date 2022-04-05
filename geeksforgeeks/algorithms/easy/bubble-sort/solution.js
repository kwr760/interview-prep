// https://practice.geeksforgeeks.org/problems/bubble-sort/1

export const solution = (arr, len) => {
  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i+1]) {
        swap(i, i+1);
        changed = true;
      }
    }
  }
  return arr;
}
