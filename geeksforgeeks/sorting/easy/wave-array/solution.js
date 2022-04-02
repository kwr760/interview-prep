// https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1

export const solution = (arr, n) => {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let greater = true;
  for (let i = 0; i < n - 1; i++) {
    if (greater && arr[i] < arr[i+1]) {
      swap(arr, i, i + 1);
    } else if (!greater && arr[i] > arr[i+1]) {
      swap(arr, i, i + 1);
    }
    greater = !greater;
  }
  return arr;
}
