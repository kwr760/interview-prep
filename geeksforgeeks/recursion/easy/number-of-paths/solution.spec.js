import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const m = 3;
    const n = 3;
    const expected = 6;

    // Act
    const result = solution(m, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const m = 2;
    const n = 8;
    const expected = 8;

    // Act
    const result = solution(m, n);

    // Assert
    expect(result).toEqual(expected);
  });
});
