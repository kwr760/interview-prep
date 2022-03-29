const swap = (arr, start, end) => {
  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return arr;
}


export const rotateArr = (arr, d, n) => {
  const reverse = (arr, start, end) => {
    while (start < end) {
      const temp = arr[start];
      arr[start++] = arr[end];
      arr[end--] = temp;
    }
    return arr;
  }
  arr = reverse(arr, 0, n-1);
  arr = reverse(arr, 0, n - d -1);
  arr = reverse(arr, n - d, n -1 );
  // const shiftBegin = n - d;
  // let start = 0;
  // let end = shiftBegin;
  // for (let i = 0; (i < n - 1 && start !== end); i++) {
  //   if (start >= shiftBegin) {
      // start = 0;
      // if (end < shiftBegin && start < end) {
      //   start = shiftBegin - 1;
      // }
    // }
    // if (end > n - 1) {
    //   end = 0;
    // }
    // arr = swap(arr, start, end);
    // start++;
    // end++;
  // }
  return arr;
}

// n = 5, d = 3
// 1 2 3 4 5
// 4 5 1 2 3
// n - d + i
// 3 2 1 4 5
// 3 4 1 2 5
// 5 4 1 2 3
// 4 5 1 2 3