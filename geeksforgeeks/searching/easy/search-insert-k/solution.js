export const solution = (arr, N, K) => {
  const binary = (search, beg, end, key) => {
    let index = Math.floor(beg + (end - beg)/2);
    const value = search[index];
    if (value === key) {
      return index;
    } else if (beg === end) {
      if (value > key) {
        return index;
      } else {
        return index + 1;
      }
    } else if (value > key) {
      const newFocal = (beg === index) ? index : index - 1;
      return binary(search, beg, newFocal, key);
    } else {
      const newFocal = (end === index) ? index : index + 1;
      return binary(search, newFocal, end, key);
    }
  };
  return binary(arr, 0, N - 1, K);
}
