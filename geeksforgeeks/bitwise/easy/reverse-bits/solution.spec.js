import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const n = 11;
    const expected = 13;

    // Act
    const result = solution(n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const n = 10;
    const expected = 5;

    // Act
    const result = solution(n);

    // Assert
    expect(result).toEqual(expected);
  });
});
