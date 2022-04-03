import { solution } from "./solution.js";
import { Node } from '../../Node.js';
import { buildTree } from "../../build-tree.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const rr = new Node(2);
    const ll = new Node(2);
    const r = new Node(1, undefined, rr);
    const l = new Node(1, ll);
    const root = new Node(5, l, r);
    const expected = true;

    // Act
    const result = solution(root);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const rr = new Node(30);
    const ll = new Node(20);
    const lr = new Node(20);
    const r = new Node(10, undefined, rr);
    const l = new Node(10, ll, lr);
    const root = new Node(1, l, r);
    const expected = false;

    // Act
    const result = solution(root);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 3', () => {
    // Arrange
    const str = '46 85 91 43 40 8 48 36 40 98 74 98 21 97 59';
    const root = buildTree(str);
    const expected = false;

    // Act
    const result = solution(root);

    // Assert
    expect(result).toEqual(expected);
  });


});
