import { solution } from "./solution.js";
import { buildTree } from "../../build-tree.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const str = '2 1 3';
    const root = buildTree(str);
    const expected = true;

    // Act
    const result = solution(root);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const str = '2 N 7 N 6 N 5 N 9 N 2 N 6';
    const root = buildTree(str);
    const expected = false;

    // Act
    const result = solution(root);

    // Assert
    expect(result).toEqual(expected);
  });
});
