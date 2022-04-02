import { Node } from './node.js';

export const arrayToLinkedList = (arr) => {
  let head;
  let node;

  arr.forEach((value) => {
    const next = new Node(value);
    if (head === undefined) {
      head = next;
      node = head;
    } else {
      node.next = next;
      node = next;
    }
  })
  return head;
}
