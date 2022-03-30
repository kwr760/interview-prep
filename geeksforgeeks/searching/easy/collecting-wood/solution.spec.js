import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const nums = [2, 3, 6, 2, 4];
    const n = nums.length;
    const k = 4;
    const expected = 3;

    // Act
    const result = solution(nums, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const nums = [1, 7, 6, 3, 4, 7];
    const n = nums.length;
    const k = 8;
    const expected = 4;

    // Act
    const result = solution(nums, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const nums = [2, 3, 5, 2, 4];
    const n = nums.length;
    const k = 6;
    const expected = 2;

    // Act
    const result = solution(nums, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
});
