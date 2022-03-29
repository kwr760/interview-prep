import { factorial, trailingZeroes } from "./solution.js";

describe('trailing zeroes in factorial', () => {
  it('view factorials', () => {
    for (let i = 1; i <= 100; i = i * 5) {
      console.log(i, factorial(i));
    }
  });
  it.each([
    [1, 0],
    [5, 1],
    [10, 2],
    [15, 3],
    [20, 4],
    [25, 6],
    [30, 7],
  ])(
    '.trailingZeroes(%i)', (n, expected) => {
      const result = trailingZeroes(n);
      expect(result).toBe(expected);
    }
  );
});
