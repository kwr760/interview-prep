// https://practice.geeksforgeeks.org/problems/find-first-and-last-occurrence-of-x0849/1

export const solution = (arr, x) => {
  const n = arr.length;
  const findLowerBoundary = (start, end) => {
    const index = start + Math.floor((end - start) / 2);
    const value = arr[index];
    const prev = arr[index - 1];
    if ((value === x && index === 0) || (value === x && prev < x)) {
      return index;
    } else if (value !== x && start === end) {
      return -1;
    } else if (value < x) {
      const newStart = (index === end) ? end : index + 1;
      return findLowerBoundary(newStart, end);
    } else if (value > x - 1) {
      const newEnd = (index === start) ? start : index - 1;
      return findLowerBoundary(start, newEnd);
    } else {
      return -1;
    }
  };
  const findUpperBoundary = (start, end) => {
    const index = start + Math.floor((end - start) / 2);
    const value = arr[index];
    const next = arr[index + 1];
    if ((value === x && index === end) || (value === x && next > x)) {
      return index;
    } else if (value !== x && start === end) {
      return -1;
    } else if (value > x) {
      const newEnd = (index === start) ? start : index - 1;
      return findUpperBoundary(start, newEnd);
    } else if (value < x + 1) {
      const newStart = (index === end) ? end : index + 1;
      return findUpperBoundary(newStart, end);
    } else {
      return -1;
    }
  };
  const lower = findLowerBoundary(0, n - 1);
  const upper = findUpperBoundary(lower, n - 1);
  return [lower, upper];
}
