import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
    const expected = [9, -2, 4, -1, 5, -5, 0, -3, 2];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
    const expected = [5, -5, 2, -2, 4, -8, 7, 1, 8, 0];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
});
