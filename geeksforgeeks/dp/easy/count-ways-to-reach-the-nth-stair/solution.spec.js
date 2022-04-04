import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const n = 4;
    const expected = BigInt(5);

    // Act
    const result = solution(n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const n = 10;
    const expected = BigInt(89);

    // Act
    const result = solution(n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const n = 84;
    const expected = BigInt(93254120);

    // Act
    const result = solution(n);

    // Assert
    expect(result).toEqual(expected);
  });
});
