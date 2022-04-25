import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const arr = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
    const expected = 'gee';

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const arr = ['hello', 'world'];
    const expected = -1;

    // Act
    const result = solution(arr, arr.length);

    // Assert
    expect(result).toEqual(expected);
  });
});
