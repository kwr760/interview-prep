// https://practice.geeksforgeeks.org/problems/number-of-paths0926/1

export const solution = (m, n) => {
  const numOfPaths = (x, y) => {
    if (x === m && y === n) {
      return 1;
    } else if (x > m || y > n) {
      return 0;
    }
    return numOfPaths(x + 1, y) + numOfPaths(x, y + 1)
  }
    return numOfPaths(1, 1);
}
