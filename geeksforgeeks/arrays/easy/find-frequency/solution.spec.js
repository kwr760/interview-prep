import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10];
    const expected = [[1, 3], [2, 1], [3, 2], [5, 2], [8, 3], [9, 2], [10, 1]];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [2, 2, 6, 6, 7, 7, 7, 11];
    const expected = [[2, 2], [6, 2], [7, 3], [11, 1]];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const arr = [2];
    const expected = [[2, 1]];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 4', () => {
    // Arrange
    const arr = [];
    const expected = [];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
});
