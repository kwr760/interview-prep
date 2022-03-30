import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = [1, 3, 5, 6];
    const n = 4;
    const k = 5;
    const expected = 2;

    // Act
    const result = solution(arr, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = [1, 3, 5, 6];
    const n = 4
    const k = 2;
    const expected = 1;

    // Act
    const result = solution(arr, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const arr = [-12, -11, -3, 5, 6, 15, 16, 18];
    const n = arr.length;
    const k = 19;
    const expected = 8;

    // Act
    const result = solution(arr, n, k);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 4', () => {
    // Arrange
    const arr = [-86, -82, -54, -35, -15, 2, 3, 4, 8, 9, 10, 13, 16, 17, 18, 19, 23, 24, 25, 28, 29, 30, 33, 34, 36, 37, 40, 41, 43, 47, 52, 53, 54, 57, 60, 64, 66, 68, 71, 73, 76, 78, 80, 81, 83, 86, 87, 93, 96, 97, 99];
    const n = arr.length;
    const k = -99;
    const expected = 0;

    // Act
    const result = solution(arr, n, k);

    // Assert
    expect(result).toEqual(expected);
  });




});
