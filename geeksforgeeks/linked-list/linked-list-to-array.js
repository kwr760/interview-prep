import { Node } from './node.js';

export const linkedListToArray = (node) => {
  let arr = [];

  while (node) {
    arr.push(node.data);
    node = node.next;
  }
  return arr;
}
