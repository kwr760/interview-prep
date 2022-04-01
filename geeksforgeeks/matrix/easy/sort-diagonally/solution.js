export const solution = (matrix, n, m) => {
  const getDiagonal = (x, y, max) => {
    const diagonal = [];
    for (let i = 0; i < max; i++) {
      if ((x+i) < n && (y+i) < m) {
        const e = matrix[x+i][y+i];
        diagonal.push(e);
      }
    }
    return diagonal;
  };
  const setDiagonal = (diagonal, x, y, max) => {
    for (let i = 0; i < max; i++) {
      if ((x+i) < n && (y+i) < m) {
        matrix[x + i][y + i] = diagonal.shift();
      }
    }
  };

  for (let i = 1; i < m - 1; i++) {
    const sort = getDiagonal(0, i, m - i);
    sort.sort((a,b) => b - a);
    setDiagonal(sort, 0, i, m - i);
  }

  for (let j = 1; j < n - 1; j++) {
    const sort = getDiagonal(j, 0, n - j);
    sort.sort((a,b) => a - b);
    setDiagonal(sort, j, 0, n - j);
  }

  return matrix;
}
