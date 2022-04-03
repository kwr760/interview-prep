import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const str = 'geeksforgeeks';
    const expected = 1;

    // Act
    const result = solution(str);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const str = 'bbbb';
    const expected = 0;

    // Act
    const result = solution(str);

    // Assert
    expect(result).toEqual(expected);
  });
});
