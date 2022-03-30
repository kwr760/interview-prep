import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [1,2,3,4,5];
    const expected = [2, 1, 4, 3, 5];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [2,4,7,8,9,10];
    const expected = [4, 2, 8, 7, 10, 9];

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
});
