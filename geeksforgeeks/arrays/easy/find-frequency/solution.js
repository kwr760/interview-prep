//

export const solution = (arr, len) => {
  let count = 1;
  let current = arr[0];
  let result = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      result.push([current, count]);
      current = arr[i];
      count = 1;
    }
  }
  if (len > 0) {
    result.push([current, count]);
  }

  return result;
}
