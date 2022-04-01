import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const n = 6;
    const x = 16;
    const arr = [1, 4, 45, 6, 10, 8];
    const expected = true;

    // Act
    const result = solution(arr, n, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const n = 5;
    const x = 10;
    const arr = [1, 2, 4, 3, 6];
    const expected = true;

    // Act
    const result = solution(arr, n, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const n = 5;
    const x = 10;
    const arr = [1, 2, 5, 3, 6];
    const expected = false;

    // Act
    const result = solution(arr, n, x);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 4', () => {
    // Arrange
    const n = 42;
    const x = 468;
    const arr = [
      335, 501, 170, 725, 479,
      359, 963, 465, 706, 146,
      282, 828, 962, 492, 996,
      943, 828, 437, 392, 605,
      903, 154, 293, 383, 422,
      717, 719, 896, 448, 727,
      772, 539, 870, 913, 668,
      300, 36, 895, 704, 812,
      323, 334
    ];
    const expected = false;

    // Act
    const result = solution(arr, n, x);

    // Assert
    expect(result).toEqual(expected);
  });
});
