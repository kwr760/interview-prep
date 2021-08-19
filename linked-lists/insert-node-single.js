const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function insertNodeAtPosition(llist, data, position) {
  const node = new SinglyLinkedListNode(data);

  if (position === 0) {
    node.next = llist;
    return node;
  }

  let pos = position;
  let head = llist;
  let prev;
  while (pos-- && head.next) {
    prev = head;
    head = head.next;
  }

  prev.next = node;
  node.next = head;

  return llist;
}

function main(list, data, position) {
  let llist = new SinglyLinkedList();

  for (let i = 0; i < list.length; i++) {
    const llistItem = list[i];
    llist.insertNode(llistItem);
  }

  return insertNodeAtPosition(llist.head, data, position);
}

let list = [3, 16, 13, 7];
let data = 1;
let position = 2;
let expected = [3, 16, 1, 13, 7];
console.log(JSON.stringify(expected), JSON.stringify(main(list, data, position)));

list = [5, 11, 9, 19, 10, 4];
data = 20;
position = 3;
expected = [5, 11, 9, 20, 19, 10, 4];
console.log(JSON.stringify(expected), JSON.stringify(main(list, data, position)));

list = [6, 1, 2, 3, 4, 5, 6];
data = 7;
position = 5;
expected = [6, 1, 2, 3, 4, 7, 5, 6];
console.log(JSON.stringify(expected), JSON.stringify(main(list, data, position)));

list = [3, 16, 13, 7];
data = 1;
position = 0;
expected = [1, 3, 16, 13, 7];
console.log(JSON.stringify(expected), JSON.stringify(main(list, data, position)));
