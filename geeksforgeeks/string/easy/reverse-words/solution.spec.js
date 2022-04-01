import { solution } from "./solution.js";
import * as assert from "assert";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const S = 'i.like.this.program.very.much';
    const expected = 'much.very.program.this.like.i';

    // Act
    const result = solution(S);

    // Assert
    expect(result).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const S = 'pqr.mno';
    const expected = 'mno.pqr';

    // Act
    const result = solution(S);

    // Assert
    expect(result).toEqual(expected);
  });
});
