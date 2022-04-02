import { solution } from "./solution.js";
import { arrayToLinkedList } from "../../array-to-linked-list.js";
import { linkedListToArray } from "../../linked-list-to-array";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const N = [5,10,15,40];
    const M = [2,3,20];
    const expected = [2, 3, 5, 10, 15, 20, 40];

    // Act
    const n = arrayToLinkedList(N);
    const m = arrayToLinkedList(M);
    const result = solution(n, m);

    // Assert
    expect(linkedListToArray(result)).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const N = [1,1];
    const M = [2,4];
    const expected = [1, 1, 2, 4];

    // Act
    const n = arrayToLinkedList(N);
    const m = arrayToLinkedList(M);
    const result = solution(n,m);

    // Assert
    expect(linkedListToArray(result)).toEqual(expected);
  });
});
