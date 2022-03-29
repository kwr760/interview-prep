import { rotateArr } from "./solution.js";

describe('missing number in array', () => {
  it('5-1', () => {
    // Array
    const n = 5;
    const d = 1;
    const arr = [1, 2, 3, 4, 5];
    const expected = [2, 3, 4, 5, 1];

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('5-2', () => {
    // Array
    const n = 5;
    const d = 2;
    const arr = [1, 2, 3, 4, 5];
    const expected = [3, 4, 5, 1, 2];

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('5-3', () => {
    // Array
    const n = 5;
    const d = 3;
    const arr = [1, 2, 3, 4, 5];
    const expected = [4, 5, 1, 2, 3];

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('5-4', () => {
    // Array
    const n = 5;
    const d = 4;
    const arr = [1, 2, 3, 4, 5];
    const expected = [5, 1, 2, 3, 4];

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('5-5', () => {
    // Array
    const n = 5;
    const d = 5;
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result).toEqual(expected);
  });
  it('two', () => {
    // Array
    const n = 10;
    const d = 3;
    const arr = [2,4,6,8,10,12,14,16,18,20];
    const expected = "8 10 12 14 16 18 20 2 4 6";

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result.join(' ')).toEqual(expected);
  });
  it('three', () => {
    // Array
    const n = 77;
    const d = 69
    const arr = [40,13,27,87,95,40,96,71,35,79,68,2,98,3,18,93,53,57,2,81,87,42,66,90,45,20,41,30,32,18,98,72,82,76,10,28,68,57,98,54,87,66,7,84,20,25,29,72,33,30,4,20,71,69,9,16,41,50,97,24,19,46,47,52,22,56,80,89,65,29,42,51,94,1,35,65,25];
    const expected = "29 42 51 94 1 35 65 25 40 13 27 87 95 40 96 71 35 79 68 2 98 3 18 93 53 57 2 81 87 42 66 90 45 20 41 30 32 18 98 72 82 76 10 28 68 57 98 54 87 66 7 84 20 25 29 72 33 30 4 20 71 69 9 16 41 50 97 24 19 46 47 52 22 56 80 89 65";

    // Act
    const result = rotateArr(arr, d, n);

    // Assert
    expect(result.join(' ')).toEqual(expected);
  });
});
