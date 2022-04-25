import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10];
    const expected = [3, 1, 2, 0, 2, 0, 0, 3, 2, 1, 0, 0, 0, 0];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [2, 2, 6, 6, 7, 7, 7, 3];
    const expected = [0, 2, 1, 0, 0, 2, 3, 0];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const arr = [1];
    const expected = [1];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 4', () => {
    // Arrange
    const arr = [];
    const expected = [];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 5', () => {
    // Arrange
    const arr = [2, 3, 2, 3, 5];
    const expected = [0, 2, 2, 0, 1];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 6', () => {
    // Arrange
    const arr = [3, 3, 3, 3];
    const expected = [0, 0, 4, 0];

    // Act
    solution(arr, arr.length);

    // Assert
    expect(arr).toEqual(expected);
  });
  it('test 7', () => {
    // Arrange
    const arr = [2, 4, 5, 6, 8];
    const P = 10;
    const expected = [0, 1, 0, 1, 1];

    // Act
    solution(arr, arr.length, P);

    // Assert
    expect(arr).toEqual(expected);
  });
});
