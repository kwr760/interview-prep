// https://practice.geeksforgeeks.org/problems/symmetric-tree/1

export const solution = (root) => {
  const recursion = () => {
    const isMirror = (left, right) => {
      if (left === null && right === null) {
        return true;
      } else if (left === null || right === null) {
        return false;
      } else {
        return left.key === right.key &&
          isMirror(left.left, right.right) &&
          isMirror(left.right, right.left);
      }
    };
    if (root === null) {
      return true;
    }
    return isMirror(root.left, root.right);
  };
  const iterative = (root) => {
    if (root === null) {
      return true;
    }
    const queue = [root.left, root.right];
    while (queue.length) {
      const left = queue.shift();
      const right = queue.shift();
      if (left === null && right === null) {
        return true;
      } else if (left === null || right === null) {
        return false;
      } else if (left.key !== right.key) {
        return false;
      }
      queue.push(left.left, right.right);
      queue.push(left.right, right.left);
    }

    return true;
  };
  return iterative(root);
}
