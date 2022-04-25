import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [10, 3, 5, 6, 2]
    const expected = [180, 600, 360, 300, 900];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [12, 0]
    const expected = [0, 12];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const arr = [0, 1, 4, 12, 0]
    const expected = [0, 0, 0, 0, 0];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
});
