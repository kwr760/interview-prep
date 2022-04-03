import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const str = '{([])}';
    const expected = true;

    // Act
    const result = solution(str);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const str = '()';
    const expected = true;

    // Act
    const result = solution(str);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const str = '([]';
    const expected = false;

    // Act
    const result = solution(str);

    // Assert
    expect(result).toEqual(expected);
  });
});
