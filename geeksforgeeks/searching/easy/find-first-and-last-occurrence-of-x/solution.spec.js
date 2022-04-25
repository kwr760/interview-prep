import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [1, 3, 5, 5, 5, 5, 6, 7, 8];
    const x = 5;
    const expected = [2, 5];

    // Act
    const result = solution(arr, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [1, 3, 5, 5, 5, 5, 6, 7, 8];
    const x = 6;
    const expected = [6, 6];

    // Act
    const result = solution(arr, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [1, 3, 5, 5, 5, 5, 6, 7, 8];
    const x = 6;
    const expected = [6, 6];

    // Act
    const result = solution(arr, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const arr = [1, 1, 3, 3, 4, 5, 5, 5, 5, 5];
    const x = 2;
    const expected = [-1, -1];

    // Act
    const result = solution(arr, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 4', () => {
    // Arrange
    const arr = [2, 3, 4];
    const x = 4;
    const expected = [2, 2];

    // Act
    const result = solution(arr, x);

    // Assert
    expect(result).toEqual(expected);
  });



});
