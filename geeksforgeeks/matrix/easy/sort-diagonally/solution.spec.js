import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const n = 4;
    const m = 5;
    const matrix = Array(
      Array(3, 6, 3, 8, 2),
      Array(4, 1, 9, 5, 9),
      Array(5, 7, 2, 4, 8),
      Array(8, 3, 1, 7, 6)
    );
    const expected = [
      [3, 9, 8, 9, 2],
      [1, 1, 6, 5, 8],
      [3, 4, 2, 6, 3],
      [8, 5, 7, 7, 4],
    ];

    // Act
    const result = solution(matrix, n, m);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const n = 5;
    const m = 4;
    const matrix = [
      [3, 6, 3, 8],
      [4, 1, 9, 5],
      [5, 7, 2, 4],
      [8, 3, 1, 7],
      [2, 9, 8, 6]
    ];
    const expected = [
      [3, 9, 5, 8],
      [1, 1, 6, 3],
      [3, 4, 2, 4],
      [8, 5, 6, 7],
      [2, 9, 8, 7]
    ];

    // Act
    const result = solution(matrix, n, m);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const n = 1;
    const m = 6;
    const matrix = [
      [50, 20, 30, 51, 20, 29],
    ];
    const expected = [
      [50, 20, 30, 51, 20, 29],
    ];

    // Act
    const result = solution(matrix, n, m);

    // Assert
    expect(result).toEqual(expected);
  });
});
