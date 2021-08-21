const validateInput = (input) => {
  if (!Array.isArray(input)) {
    return false;
  }

  const columnDepth = input.length;
  if (columnDepth < 3) {
    return false;
  }

  let rowLength;
  for (let i = 0; i < columnDepth; i++) {
    if (!Array.isArray(input[i])) {
      return false;
    }
    if (i === 0) {
      rowLength = input[i].length;
      if (rowLength < 3) {
        return false;
      }
    }
    if (rowLength !== input[i].length) {
      return false;
    }
  }
  return true;
};

const getHourGlassValue = (input, i, j) => {
  return input[i-1][j-1] + input[i-1][j] + input[i-1][j+1] +
    input[i][j] +
    input[i+1][j-1] + input[i+1][j] + input[i+1][j+1];
}

const findMaxInHourGlass = (input) => {
  let max;

  if (!validateInput(input)) {
    throw new Error('Input array needs to be a 2D array of at least 3x3');
  }

  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length -1; j++) {
      const value = getHourGlassValue(input, i, j)
      if (i === 1 && j === 1) {
        max = value;
      } else {
        if (max < value) {
          max = value;
        }
      }
    }
  }

  return max;
}

let input = [
  [-9, -9, -9,  1, 1, 1],
  [0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [0,  0,  8,  6, 6, 0],
  [0,  0,  0, -2, 0, 0],
  [0,  0,  1,  2, 4, 0]
];

console.log(findMaxInHourGlass(input));

input = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

console.log(findMaxInHourGlass(input));
