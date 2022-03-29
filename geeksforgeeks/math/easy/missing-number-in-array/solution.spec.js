import { missingNumber } from "./solution.js";

describe('missing number in array', () => {
  it('simple input', () => {
    // Array
    const arr = [1, 2, 3, 5];
    const expected = 4

    // Act
    const result = missingNumber(arr, arr.length);

    // Assert
    expect(result).toBe(expected);
  });
  it('more complicated', () => {
    // Array
    const arr = [6,1,2,8,3,4,7,10,5];
    const expected = 9;

    // Act
    const result = missingNumber(arr, arr.length);

    // Assert
    expect(result).toBe(expected);
  });
});
