// https://practice.geeksforgeeks.org/problems/check-for-bst/1

export const solution = (root) => {
  const isBst = (node, min, max) => {
    if (node === null) {
      return true;
    }
    const { key, right, left } = node;
    if (key < min || key > max) {
      return false;
    }
    return !(!isBst(left, min, key - 1) || !isBst(right, key + 1, max));
  };
  return isBst(root, Number.MIN_VALUE, Number.MAX_VALUE);
}
